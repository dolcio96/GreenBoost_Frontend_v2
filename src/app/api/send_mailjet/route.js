import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { to, subject, text } = await req.json();
    // Use environment variables for Mailjet API credentials
    const MAILJET_API_KEY = process.env.NEXT_PUBLIC_MAILJET_API_KEY;
    const MAILJET_API_SECRET = process.env.NEXT_PUBLIC_MAILJET_API_SECRET;
    const MAILJET_SENDER = process.env.NEXT_PUBLIC_MAILJET_SENDER || 'noreply@greenboost.it';

    if (!MAILJET_API_KEY || !MAILJET_API_SECRET) {
      return NextResponse.json({ error: 'Mailjet credentials not set' }, { status: 500 });
    }

    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`).toString('base64'),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: MAILJET_SENDER,
              Name: 'GreenBoost Notification',
            },
            To: [
              {
                Email: to,
                Name: to,
              },
            ],
            Subject: subject,
            TextPart: text,
            HTMLPart: `<h3>${subject}</h3><p>${text.replace(/\n/g, '<br/>')}</p>`
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
