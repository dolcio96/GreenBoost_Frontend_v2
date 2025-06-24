import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { nome, email, azienda, data, ora } = await req.json();

    const client_id = process.env.MS_CLIENT_ID;
    const client_secret = process.env.MS_CLIENT_SECRET;
    const tenant_id = process.env.MS_TENANT_ID;
    const organizer_email = process.env.MS_ORGANIZER_EMAIL;

    // 1. Ottieni access token
    const tokenRes = await fetch(`https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id,
        client_secret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return NextResponse.json({ success: false, error: 'Token error', details: tokenData }, { status: 500 });
    }
    const access_token = tokenData.access_token;

    // 2. Crea evento su Outlook/Teams
    const startDateTime = `${data}T${ora}:00+02:00`;
    const [h, m] = ora.split(':');
    const endDate = new Date(`${data}T${ora}:00+02:00`);
    endDate.setMinutes(endDate.getMinutes() + 30);
    const endDateTime = endDate.toISOString().replace('.000Z', '+02:00');

    const eventBody = {
      subject: `CALL D4D - ${azienda}`,
      start: {
        dateTime: startDateTime,
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Europe/Rome',
      },
      attendees: [
        {
          emailAddress: {
            address: organizer_email,
            name: 'Organizzatore',
          },
          type: 'required',
        },
        {
          emailAddress: {
            address: email,
            name: nome,
          },
          type: 'required',
        },
      ],
      isOnlineMeeting: true,
      onlineMeetingProvider: 'teamsForBusiness',
      body: {
        contentType: 'HTML',
        content: `Richiesta meeting da ${nome} (${email})<br/>Azienda: ${azienda}`,
      },
    };

    const eventRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${organizer_email}/events`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventBody),
      }
    );
    const eventData = await eventRes.json();

    if (!eventRes.ok || !eventData.onlineMeeting || !eventData.onlineMeeting.joinUrl) {
      return NextResponse.json({ success: false, error: 'Event creation failed', details: eventData }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      joinUrl: eventData.onlineMeeting.joinUrl,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
