import { sendMail } from '@/lib/resend-mail'
import { NextResponse } from 'next/server'

// Extend default request timeout for serverless environments
export const maxDuration = 60; // Maximum duration in seconds for Vercel serverless function

export async function POST(req: Request) {
  console.log("Energy Quote API called");

  try {
    const { name,businessName, phoneNumber, selectedServices, postcode } = await req.json()
    console.log("Energy Quote API called", { name,businessName, phoneNumber, selectedServices, postcode });

    // Enhanced validation with specific error messages
    const errors: string[] = [];
    
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!businessName || typeof businessName !== 'string' || businessName.trim().length === 0) {
      errors.push('Business name is required');
    }
    
    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim().length === 0) {
      errors.push('Phone number is required');
    }
    
    if (!postcode || typeof postcode !== 'string' || postcode.trim().length === 0) {
      errors.push('Postcode is required');
    }
    
    if (!selectedServices || !Array.isArray(selectedServices) || selectedServices.length === 0) {
      errors.push('At least one service must be selected');
    }
    
    if (errors.length > 0) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: errors 
        },
        { status: 400 }
      )
    }

    // Format selected services for display
    const servicesText = Array.isArray(selectedServices) 
      ? selectedServices.join(', ')
      : String(selectedServices);

    // Generate HTML for email with better formatting
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.5; }
          h2 { color: #3faa4e; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .quote-details { background-color: #f9f9f9; padding: 15px; border-radius: 4px; }
          .detail-row { margin-bottom: 8px; }
          .label { font-weight: bold; }
        </style>
      </head>
      <body>
        <h2>New Energy Quote Request</h2>
        <div class="quote-details">
          <div class="detail-row"><span class="label">Name:</span> ${name}</div>
          <div class="detail-row"><span class="label">Business Name:</span> ${businessName}</div>
          <div class="detail-row"><span class="label">Phone:</span> ${phoneNumber}</div>
          <div class="detail-row"><span class="label">Postcode:</span> ${postcode}</div>
          <div class="detail-row"><span class="label">Services requested:</span> ${servicesText}</div>
        </div>
        <p>This request was submitted via the Energy Quote form on the website.</p>
      </body>
      </html>
    `

    console.log("Sending energy quote email to:", process.env.RESEND_TO);
    
    try {
      const result = await sendMail({
        to: process.env.RESEND_TO || 'info@ecosavegas.co.uk',
        subject: `New Energy Quote Request - ${name} - ${postcode}`,
        html: htmlContent,
      })

      if (!result.success) {
        console.error("Energy quote email sending failed:", result);
        
        // Create a more user-friendly error message
        let errorMessage = 'Failed to send quote request. Please try again later or contact us directly.';
        
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

      console.log("Energy quote email sent successfully:", result.messageId);
      return NextResponse.json({ 
        success: true,
        message: 'Your quote request has been submitted successfully' 
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Energy Quote API error:', error)
    return NextResponse.json(
      { error: 'Invalid request format. Please check your submission and try again.' },
      { status: 400 }
    )
  }
} 