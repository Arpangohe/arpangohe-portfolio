import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.email_user = os.environ.get('EMAIL_USER')
        self.email_password = os.environ.get('EMAIL_PASSWORD')
        self.smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', 587))
    
    def send_admin_notification(self, submission_data: Dict) -> bool:
        """Send notification email to admin about new contact submission"""
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.email_user
            msg['To'] = self.email_user
            msg['Subject'] = f"New Project Inquiry - {submission_data.get('service_type', 'General')}"
            
            # Create HTML email body
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #00D4FF; border-bottom: 2px solid #39FF14; padding-bottom: 10px;">
                            New Project Inquiry
                        </h2>
                        
                        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Name:</strong> {submission_data.get('name')}</p>
                            <p><strong>Email:</strong> <a href="mailto:{submission_data.get('email')}">{submission_data.get('email')}</a></p>
                            <p><strong>Phone:</strong> {submission_data.get('phone', 'Not provided')}</p>
                            <p><strong>Service Type:</strong> {submission_data.get('service_type')}</p>
                            <p><strong>Budget Range:</strong> {submission_data.get('budget')}</p>
                            <p><strong>Start Date:</strong> {submission_data.get('start_date', 'Not specified')}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #333;">Project Description:</h3>
                            <p style="background: #fff; padding: 15px; border-left: 4px solid #00D4FF; border-radius: 4px;">
                                {submission_data.get('description')}
                            </p>
                        </div>
                        
                        <div style="background: #00D4FF; color: #000; padding: 10px; border-radius: 4px; text-align: center; margin: 20px 0;">
                            <strong>Lead Priority:</strong> HIGH
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                        
                        <p style="color: #666; font-size: 12px; text-align: center;">
                            Sent from Arpan Gohe Portfolio<br>
                            <a href="http://localhost:3000" style="color: #00D4FF;">View Portfolio</a>
                        </p>
                    </div>
                </body>
            </html>
            """
            
            msg.attach(MIMEText(html_content, 'html'))
            
            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                server.send_message(msg)
            
            logger.info(f"Admin notification sent successfully for {submission_data.get('email')}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send admin notification: {str(e)}")
            return False
    
    def send_user_autoresponder(self, user_email: str, user_name: str) -> bool:
        """Send auto-responder email to user"""
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.email_user
            msg['To'] = user_email
            msg['Subject'] = "Thank you for reaching out!"
            
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #00D4FF, #39FF14); border-radius: 8px 8px 0 0;">
                            <h1 style="color: #000; margin: 0;">Thank You!</h1>
                        </div>
                        
                        <div style="padding: 30px; background: #f9f9f9;">
                            <p style="font-size: 16px;">Hi {user_name},</p>
                            
                            <p>Thank you for your interest in working together! I've received your project inquiry and will review it shortly.</p>
                            
                            <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #00D4FF; margin-top: 0;">What happens next:</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="padding: 8px 0;">✅ I'll review your project details</li>
                                    <li style="padding: 8px 0;">✅ Prepare a customized proposal</li>
                                    <li style="padding: 8px 0;">✅ Get back to you within 24 hours</li>
                                </ul>
                            </div>
                            
                            <p><strong>In the meantime, feel free to:</strong></p>
                            <ul>
                                <li>📞 Call/WhatsApp: <a href="https://wa.me/918962427126" style="color: #00D4FF;">+91-896-242-7126</a></li>
                                <li>🔗 Connect on LinkedIn: <a href="https://linkedin.com/in/arpangohe" style="color: #00D4FF;">linkedin.com/in/arpangohe</a></li>
                                <li>💼 View my projects: <a href="http://localhost:3000#projects" style="color: #00D4FF;">Portfolio</a></li>
                            </ul>
                            
                            <p style="margin-top: 30px;">Looking forward to discussing your project!</p>
                            
                            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                                <p style="margin: 5px 0;"><strong>Best regards,</strong></p>
                                <p style="margin: 5px 0; color: #00D4FF; font-weight: bold;">Arpan Gohe</p>
                                <p style="margin: 5px 0; color: #666; font-size: 14px;">
                                    AI Strategist • Full-Stack Developer • EdTech Entrepreneur
                                </p>
                                <p style="margin: 5px 0; color: #666; font-size: 12px;">
                                    📧 arpangohework@gmail.com | 📱 +91-896-242-7126
                                </p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding: 15px; background: #333; color: #fff; border-radius: 0 0 8px 8px;">
                            <p style="margin: 0; font-size: 12px;">
                                © 2025 Arpan Gohe. Built with React & AI.
                            </p>
                        </div>
                    </div>
                </body>
            </html>
            """
            
            msg.attach(MIMEText(html_content, 'html'))
            
            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                server.send_message(msg)
            
            logger.info(f"Auto-responder sent successfully to {user_email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send auto-responder: {str(e)}")
            return False

# Singleton instance
email_service = EmailService()
