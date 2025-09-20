import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendWaitlistConfirmation = async (email: string, name?: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Snow Leaf Store <noreply@snowleafstore.com>',
      to: [email],
      subject: 'Welcome to Snow Leaf Store Waitlist! 🌿',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; font-size: 28px; margin-bottom: 10px;">Snow Leaf Store</h1>
            <p style="color: #6b7280; font-size: 16px;">Pure Organic Wellness for Your Home</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #111827; font-size: 24px; margin-bottom: 15px;">Welcome to our waitlist! 🌿</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining our community of families who care about pure, organic wellness.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              You'll be the first to know when we launch our bamboo towels and organic bedsheets, 
              plus get exclusive early access pricing!
            </p>
            <div style="background-color: #ecfdf5; border-left: 4px solid #059669; padding: 15px; margin: 20px 0;">
              <p style="color: #065f46; font-size: 14px; margin: 0;">
                <strong>What's coming:</strong><br>
                • Ultra-soft bamboo towels<br>
                • Luxurious organic cotton bedsheets<br>
                • Complete organic wellness system
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
              Questions? Reply to this email or visit our website.
            </p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              © 2024 Snow Leaf Store. All rights reserved.<br>
              You're receiving this because you joined our waitlist.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      throw new Error('Failed to send confirmation email')
    }

    return data
  } catch (error) {
    console.error('Error in sendWaitlistConfirmation:', error)
    throw error
  }
}
