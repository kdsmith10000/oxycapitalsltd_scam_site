import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ 
    message: 'Tips API is running. Use POST to submit a tip.',
    status: 'ok'
  });
}

export async function POST(request: Request) {
  try {
    let body;
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      body = await request.json();
    } else {
      const text = await request.text();
      const params = new URLSearchParams(text);
      body = {};
      for (const [key, value] of params) {
        body[key] = value;
      }
    }
    
    const { tipType, suspectWebsite, suspectDiscord, suspectEmail, suspectWallet, amountLost, description, contactEmail, additionalInfo } = body;

    // Build the email content
    const emailContent = `
=== Crypto Scam Tip Submission ===

TIP TYPE:
${tipType || 'General'}

SUSPECTED WEBSITE:
${suspectWebsite || 'Not provided'}

SUSPECTED DISCORD USERNAME:
${suspectDiscord || 'Not provided'}

SUSPECTED EMAIL:
${suspectEmail || 'Not provided'}

SUSPECTED WALLET ADDRESS(ES):
${suspectWallet || 'Not provided'}

APPROXIMATE AMOUNT LOST:
${amountLost || 'Not provided'}

DETAILED DESCRIPTION:
${description || 'Not provided'}

YOUR CONTACT EMAIL:
${contactEmail || 'Not provided (anonymous)'}

ADDITIONAL INFORMATION:
${additionalInfo || 'Not provided'}

--- Submitted via Dirty Crypto Tips Form ---
    `.trim();

    // Use Resend to send email
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.log('RESEND_API_KEY not found');
      return NextResponse.json({
        success: true,
        message: 'Tip submitted successfully (email not configured)',
        debug: { tipType, suspectWebsite, suspectDiscord }
      }, { status: 200 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Dirty Crypto Tips <onboarding@resend.dev>',
        to: 'tips@dirtycrypto.org',
        subject: `Crypto Scam Tip: ${tipType || 'General'}`,
        text: emailContent
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Tip submitted successfully!' });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}
