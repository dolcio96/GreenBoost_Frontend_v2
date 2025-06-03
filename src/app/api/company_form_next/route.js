// Next.js App Router API route for proxying requests to the backend

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const backendRes = await fetch('http://13.37.211.151:443/api/company_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    const data = await backendRes.json();
    return new Response(JSON.stringify(data), {
      status: backendRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Proxy error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
