import json
import urllib.request
import urllib.parse
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form submissions to Telegram bot
    Args: event with httpMethod, body containing name, phone, email, message
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'POST')
    
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
    
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    message = body_data.get('message', '')
    preferred_time = body_data.get('preferredTime', '')
    
    bot_token = os.environ.get('TELEGRAM_TOKEN', '').strip()
    chat_id = os.environ.get('TELEGRAM_CHATID', '').strip()
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': f'Config missing - token: {bool(bot_token)}, chat: {bool(chat_id)}'})
        }
    
    time_info = f'\n⏰ Удобное время: {preferred_time}' if preferred_time else ''
    
    telegram_message = f'''🔔 Новая заявка с сайта

👤 Имя: {name}
📱 Телефон: {phone}
✉️ Email: {email}{time_info}

💬 Сообщение:
{message}'''
    
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={urllib.parse.quote(telegram_message)}'
    
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'success': True, 'message': 'Sent to Telegram'})
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'error': f'Telegram error: {result}'})
                }
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'HTTP {e.code}: {error_body}'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'Error: {str(e)}, token_len: {len(bot_token)}, chat_id: {chat_id}'})
        }