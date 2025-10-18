import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter with explicit SMTP settings and sensible timeouts
const createTransporterCandidates = () => ([
    // Preferred: SMTPS on 465
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
        tls: { servername: "smtp.gmail.com" },
    },
    // Fallback: SMTP with STARTTLS on 587
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
        tls: { servername: "smtp.gmail.com" },
    }
]);

const pickWorkingTransporter = async () => {
    const configs = createTransporterCandidates();
    for (const cfg of configs) {
        const transporter = nodemailer.createTransport(cfg);
        try {
            const ok = await transporter.verify();
            if (ok === true) return { transporter, config: { port: cfg.port, secure: cfg.secure === true } };
        } catch (e) {
            // try next config
        }
    }
    throw new Error("SMTP_VERIFY_FAILED");
};

export const verifyEmailTransport = async () => {
    try {
        const { transporter, config } = await pickWorkingTransporter();
        const ok = await transporter.verify();
        return { success: ok === true, used: config };
    } catch (err) {
        return { success: false, error: { message: err.message, code: err.code } };
    }
};

export const sendMail = async ({ name, email, message }) => {
  try {
        const { transporter, config } = await pickWorkingTransporter();

    // HTML Email Template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333333;
                background-color: #f4f4f4;
            }
            
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            
            .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .contact-info {
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 30px;
                margin-bottom: 30px;
                border-left: 4px solid #667eea;
            }
            
            .info-row {
                display: flex;
                align-items: flex-start;
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .info-row:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
            }
            
            .info-icon {
                width: 24px;
                height: 24px;
                margin-right: 15px;
                margin-top: 2px;
                flex-shrink: 0;
            }
            
            .info-content {
                flex: 1;
            }
            
            .info-label {
                font-size: 12px;
                font-weight: 600;
                color: #64748b;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 4px;
            }
            
            .info-value {
                font-size: 16px;
                font-weight: 500;
                color: #1e293b;
                word-break: break-word;
            }
            
            .message-section {
                margin-top: 30px;
            }
            
            .message-label {
                font-size: 14px;
                font-weight: 600;
                color: #374151;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .message-content {
                background-color: #ffffff;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                padding: 24px;
                font-size: 16px;
                line-height: 1.7;
                color: #374151;
                white-space: pre-wrap;
                word-wrap: break-word;
            }
            
            .footer {
                background-color: #f1f5f9;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            
            .footer-text {
                font-size: 14px;
                color: #64748b;
                margin-bottom: 15px;
            }
            
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
            }
            
            .timestamp {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                font-size: 12px;
                color: #9ca3af;
                text-align: center;
            }
            
            @media only screen and (max-width: 600px) {
                .email-container {
                    margin: 10px;
                    border-radius: 8px;
                }
                
                .header {
                    padding: 30px 20px;
                }
                
                .header h1 {
                    font-size: 24px;
                }
                
                .content {
                    padding: 30px 20px;
                }
                
                .contact-info {
                    padding: 20px;
                }
                
                .footer {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p>Someone reached out through your portfolio website</p>
            </div>
            
            <div class="content">
                <div class="contact-info">
                    <div class="info-row">
                        <div class="info-content">
                            <div class="info-label">👤 Full Name</div>
                            <div class="info-value">${name || 'Not provided'}</div>
                        </div>
                    </div>
                    
                    <div class="info-row">
                        <div class="info-content">
                            <div class="info-label">📧 Email Address</div>
                            <div class="info-value">
                                <a href="mailto:${email || ''}" style="color: #667eea; text-decoration: none;">
                                    ${email || 'Not provided'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="message-section">
                    <div class="message-label">💬 Message</div>
                    <div class="message-content">${message || 'No message provided'}</div>
                </div>
            </div>
            
            <div class="footer">
                <p class="footer-text">
                    This message was sent through your portfolio contact form.
                </p>
                <a href="mailto:${email || ''}" class="cta-button">
                    Reply to ${name || 'Contact'}
                </a>
                
                <div class="timestamp">
                    📅 Received on ${new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short'
                    })}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textVersion = `
🌟 NEW CONTACT FORM SUBMISSION

👤 Name: ${name || 'Not provided'}
📧 Email: ${email || 'Not provided'}

💬 Message:
${message || 'No message provided'}

---
📅 Received: ${new Date().toLocaleString()}
🔗 Reply to: ${email || 'N/A'}

This message was sent through your portfolio contact form.
    `;

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `🚀 New Portfolio Contact: ${name || "Anonymous"} - ${new Date().toLocaleDateString()}`,
      text: textVersion,
      html: htmlTemplate,
      // Add high priority flag for important messages
      priority: 'normal',
      // Add custom headers for better email client handling
      headers: {
        'X-Contact-Form': 'Portfolio Website',
        'X-Sender-IP': 'Contact Form',
      }
    };

        // Add a hard timeout around sendMail in case the provider hangs
        const withTimeout = (p, ms) => new Promise((resolve, reject) => {
            const t = setTimeout(() => reject(new Error("SMTP_TIMEOUT")), ms);
            p.then(v => { clearTimeout(t); resolve(v); }).catch(e => { clearTimeout(t); reject(e); });
        });

        const info = await withTimeout(transporter.sendMail(mailOptions), 20000);
    
    return { 
      success: true, 
      messageId: info.messageId,
      timestamp: new Date().toISOString()
    };

  } catch (err) {
    console.error("❌ Mail Error:", {
      message: err.message,
      code: err.code,
      command: err.command,
      timestamp: new Date().toISOString()
    });
    
    return { 
      success: false, 
      error: {
        message: err.message,
        code: err.code || 'UNKNOWN_ERROR',
        timestamp: new Date().toISOString()
      }
    };
  }
};