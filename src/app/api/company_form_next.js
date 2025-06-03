// Next.js API route for proxying requests to the backend

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const backendRes = await fetch('http://13.37.211.151:443/api/company_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      const data = await backendRes.json();
      res.status(backendRes.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
