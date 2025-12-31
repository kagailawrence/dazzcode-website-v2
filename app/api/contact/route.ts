import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Dazzcode Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || 'info@dazzcode.com',
            replyTo: email,
            subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        };

        // Verify connection configuration
        await new Promise((resolve, reject) => {
            // only verify if we have credentials, otherwise skip to allow testing error handling
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                // If not configured, we might want to log it but for now let's just proceed to send which will fail accordingly or mocking
                // Actually, let's reject if no creds, to give a clear error
                // reject(new Error("SMTP credentials missing"));
                resolve(true); // Let the sendMail call fail if needed, or if mock logic is preferred. 
                // For production simplicity:
                transporter.verify(function (error: Error | null, success: true) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        console.log("Server is ready to take our messages");
                        resolve(success);
                    }
                });
            } else {
                resolve(true);
            }
        });

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send message.' },
            { status: 500 }
        );
    }
}
