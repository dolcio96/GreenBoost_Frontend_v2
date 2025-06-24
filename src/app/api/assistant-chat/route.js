import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { input, threadId } = await req.json();

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;

    // 1. Create thread if not exists
    let currentThreadId = threadId;
    if (!currentThreadId) {
      const threadRes = await fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "OpenAI-Beta": "assistants=v2",
        },
      });
      const threadData = await threadRes.json();
      currentThreadId = threadData.id;
    }

    // 2. Add user message to thread
    await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        role: "user",
        content: [
          {
            type: "text",
            text: input,
          },
        ],
      }),
    });

    // 3. Run the assistant on the thread
    const runRes = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        assistant_id: ASSISTANT_ID,
      }),
    });
    const runData = await runRes.json();
    if (!runRes.ok) {
      return NextResponse.json({
        error: runData.error?.message || "Failed to start assistant run.",
      }, { status: 500 });
    }
    const runId = runData.id;

    // 4. Poll for run completion
    let status = runData.status;
    let attempts = 0;
    let pollError = null;
    while (status !== "completed" && status !== "failed" && attempts < 20) {
      await new Promise((res) => setTimeout(res, 1500));
      const pollRes = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs/${runId}`, {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "OpenAI-Beta": "assistants=v2",
        },
      });
      const pollData = await pollRes.json();
      if (!pollRes.ok) {
        pollError = pollData.error?.message || "Polling error";
        break;
      }
      status = pollData.status;
      attempts++;
    }
    if (pollError) {
      return NextResponse.json({ error: pollError }, { status: 500 });
    }
    if (status !== "completed") {
      return NextResponse.json({ error: "Assistant did not complete." }, { status: 500 });
    }

    // 5. Get all messages in thread, display full conversation
    const msgsRes = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "OpenAI-Beta": "assistants=v2",
      },
    });
    const msgsData = await msgsRes.json();
    const sortedMsgs = (msgsData.data || []).sort((a, b) => a.created_at - b.created_at);
    const displayMsgs = sortedMsgs.map((m) => {
      let text = "";
      if (Array.isArray(m.content) && m.content.length > 0 && m.content[0].type === "text") {
        text = m.content[0].text.value || m.content[0].text || "";
      }
      return { role: m.role, content: text };
    });

    return NextResponse.json({
      threadId: currentThreadId,
      messages: displayMsgs,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
