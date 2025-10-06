import { sendMail } from '@/lib/resend-mail'
import { NextResponse } from 'next/server'

// Extend default request timeout for serverless environments
export const maxDuration = 60; // Maximum duration in seconds for Vercel serverless function

export async function POST(req: Request) {
  console.log("Contact API called");

  try {
    const { firstName, lastName, businessName, email, phone, message } = await req.json()
    console.log("Contact API called", { firstName, lastName, businessName, email, phone, message });

    // Basic validation
    if (!firstName || !lastName || !businessName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    console.log("Sending email to:", process.env.RESEND_TO || email);
    console.log("Environment variables check:", {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set' : 'Missing',
      RESEND_FROM: process.env.RESEND_FROM ? 'Set' : 'Missing',
      RESEND_TO: process.env.RESEND_TO ? 'Set' : 'Missing',
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL ? 'Yes' : 'No'
    });
    
    const result = await sendMail({
      to: process.env.RESEND_TO || email,
      subject: 'New Contact Form Submission',
      html: htmlContent,
    })

    if (!result.success) {
      console.error("Email sending failed:", result);
      
      // Create a more user-friendly error message
      let errorMessage = 'Failed to send email. Please try again later or contact us directly.';
      
      // Add more details if running in development
      if (process.env.NODE_ENV === 'development') {
        errorMessage += ` Error: ${result.error}`;
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: process.env.NODE_ENV === 'development' ? result : undefined
        },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", result.messageId);
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}