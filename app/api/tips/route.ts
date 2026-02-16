import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'Tips API is running' });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { tipType, suspectWebsite, suspectDiscord, suspectEmail, suspectWallet, amountLost, description, contactEmail, additionalInfo } = body;

    const emailContent = `
=== Crypto Scam Tip Submission ===

TIP TYPE: ${tipType || 'General'}

SUSPECTED WEBSITE: ${suspectWebsite || 'Not provided'}

SUSPECTED DISCORD: ${suspectDiscord || 'Not provided'}

SUSPECTED EMAIL: ${suspectEmail || 'Not provided'}

WALLET ADDRESS(ES): ${suspectWallet || 'Not provided'}

AMOUNT LOST: ${amountLost || 'Not provided'}

DESCRIPTION: ${description || 'Not provided'}

CONTACT EMAIL: ${contactEmail || 'Anonymous'}

ADDITIONAL INFO: ${additionalInfo || 'None'}

---
Submitted via DirtyCrypto.org tips form
    `.trim();

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('[Tips API] RESEND_API_KEY is not set — email will not be sent');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Dirty Crypto <tips@dirtycrypto.org>';
    const toAddress = process.env.RESEND_TO_EMAIL || 'tips@dirtycrypto.org';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: fromAddress,
        to: toAddress,
        subject: `Crypto Scam Tip: ${tipType || 'General'}`,
        text: emailContent
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('[Tips API] Resend API error:', response.status, JSON.stringify(responseData));
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('[Tips API] Email sent successfully:', responseData.id);
    return NextResponse.json({ success: true, message: 'Tip submitted successfully!' });
  } catch (error) {
    console.error('[Tips API] Unexpected error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred processing your tip' },
      { status: 500 }
    );
  }
}
