import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
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

    // Use Resend to send email (free tier available)
    // You'll need to add RESEND_API_KEY to your environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      // Fallback: If no API key configured, return instructions
      return NextResponse.json({
        success: true,
        message: 'Form submitted! Email sending is not configured yet.',
        debug: {
          tipType,
          suspectWebsite,
          suspectDiscord,
          description: description?.substring(0, 100) + '...'
        }
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Dirty Crypto Tips <tips@dirtycrypto.org>',
        to: 'tips@dirtycrypto.org',
        subject: `Crypto Scam Tip: ${tipType || 'General'}`,
        text: emailContent
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Tip submitted successfully!' });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
