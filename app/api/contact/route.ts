import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // Form Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
        const smtpPort = Number(process.env.SMTP_PORT) || 587;
        const smtpUser = process.env.SMTP_USER?.trim();
        // Remove any spaces or accidental quotes from the app password
        const smtpPass = process.env.SMTP_PASS?.trim().replace(/\s+/g, '').replace(/['"]/g, '');
        const recipientEmail = process.env.CONTACT_EMAIL?.trim() || smtpUser || 'info@dazzcode.com';

        // Check if SMTP is configured
        if (!smtpUser || !smtpPass) {
            console.warn(
                '[Contact Form Warning]: SMTP_USER or SMTP_PASS is missing in .env.local. Logged inquiry to console:'
            );
            console.log({
                timestamp: new Date().toISOString(),
                name,
                email,
                company: company || 'Not provided',
                message,
            });

            return NextResponse.json(
                {
                    success: true,
                    note: 'Inquiry received. (SMTP not configured in local environment)',
                },
                { status: 200 }
            );
        }

        // Configure Nodemailer Transporter
        const isGmail = smtpHost.includes('gmail.com');
        const transporter = nodemailer.createTransport(
            isGmail
                ? {
                      service: 'gmail',
                      auth: {
                          user: smtpUser,
                          pass: smtpPass,
                      },
                  }
                : {
                      host: smtpHost,
                      port: smtpPort,
                      secure: smtpPort === 465 || process.env.SMTP_SECURE === 'true',
                      auth: {
                          user: smtpUser,
                          pass: smtpPass,
                      },
                  }
        );

        // Email layout
        const mailOptions = {
            from: `"Dazzcode Website" <${smtpUser}>`,
            to: recipientEmail,
            replyTo: email,
            subject: `New Project Inquiry from ${name} ${company ? `(${company})` : ''}`,
            text: `
New Project Inquiry Received

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
            `.trim(),
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8faf9; color: #12201b; margin: 0; padding: 24px; }
    .card { background-color: #ffffff; border: 1px solid #e1e7e4; border-radius: 16px; padding: 24px; max-width: 560px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
    .badge { display: inline-block; background-color: #ecfdf5; color: #059669; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; }
    h2 { margin: 0 0 16px 0; font-size: 20px; color: #0f172a; }
    .field { margin-bottom: 12px; font-size: 14px; }
    .field-label { font-weight: 600; color: #52605b; font-size: 12px; text-transform: uppercase; margin-bottom: 2px; }
    .field-value { font-size: 15px; color: #0f172a; }
    .message-box { background-color: #f8faf9; border: 1px solid #e1e7e4; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #12201b; white-space: pre-wrap; margin-top: 16px; }
    .footer { font-size: 12px; color: #8a9993; margin-top: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">New Lead · Dazzcode Contact Form</div>
    <h2>Project Inquiry Details</h2>
    
    <div class="field">
      <div class="field-label">Sender Name</div>
      <div class="field-value"><strong>${name}</strong></div>
    </div>
    
    <div class="field">
      <div class="field-label">Email Address</div>
      <div class="field-value"><a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></div>
    </div>
    
    <div class="field">
      <div class="field-label">Company / Project</div>
      <div class="field-value">${company || 'Not provided'}</div>
    </div>
    
    <div class="field">
      <div class="field-label">Message / Details</div>
      <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
    </div>
    
    <div class="footer">
      Sent directly from the Dazzcode website contact form. Click "Reply" to respond directly to ${email}.
    </div>
  </div>
</body>
</html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send email. Please check your credentials.' },
            { status: 500 }
        );
    }
}
