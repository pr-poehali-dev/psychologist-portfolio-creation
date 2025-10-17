import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form submissions to email via Mail.ru SMTP
    Args: event with httpMethod, body containing name, phone, email, message
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    message = body_data.get('message', '')
    
    # Get credentials from environment
    mail_user = os.environ.get('MAIL_USER')
    mail_password = os.environ.get('MAIL_APP_PASSWORD')
    
    if not mail_user or not mail_password:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Email configuration missing'})
        }
    
    # Create email message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {name}'
    msg['From'] = mail_user
    msg['To'] = mail_user
    
    # Email body
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка с сайта</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Имя:</strong> {name}</p>
          <p><strong>Телефон:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Сообщение:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px;">{message}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">Это письмо отправлено автоматически с формы обратной связи на сайте.</p>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_content, 'html'))
    
    # Send email via Mail.ru SMTP
    try:
        server = smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=10)
        server.set_debuglevel(0)
        server.login(mail_user, mail_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'Failed to send email: {str(e)}'})
        }