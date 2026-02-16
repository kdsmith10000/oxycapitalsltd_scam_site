import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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
      return NextResponse.json({
        success: true,
        message: 'Tip submitted - email not configured'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Dirty Crypto <onboarding@resend.dev>',
        to: 'tips@dirtycrypto.org',
        subject: `Crypto Scam Tip: ${tipType || 'General'}`,
        text: emailContent
      })
    });

    if (!response.ok) {
      return NextResponse.json({ success: true, message: 'Tip submitted' });
    }

    return NextResponse.json({ success: true, message: 'Tip submitted successfully!' });
  } catch (error) {
    return NextResponse.json({ success: true, message: 'Tip submitted' });
  }
}
