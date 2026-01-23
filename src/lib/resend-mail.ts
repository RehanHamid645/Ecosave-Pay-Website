import { Resend } from 'resend';

// Initialize Resend with API key only if it's available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    // Check if Resend is initialized
    if (!resend) {
      console.warn("Resend API key not configured, email sending disabled");
      return { success: false, error: 'Email service not configured' };
    }
    
    console.log("Sending email via Resend API:", { 
      to, 
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
    });
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Ecosave Pay <onboarding@resend.dev>',
      to,
      subject,
      html,
    });
    
    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error };
    }
    
    console.log("Email sent successfully via Resend:", data?.id);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    return { success: false, error };
  }
} 