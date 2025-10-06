import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

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
    console.log("Sending email via Resend API:", { 
      to, 
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
    });
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Ecosave Gas and Power <onboarding@resend.dev>',
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