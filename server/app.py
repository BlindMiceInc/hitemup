from flask import Flask, render_template
import json

app = Flask(__name__, static_folder="static/dist", template_folder="static")
EMAIL_DATA = None

@app.route('/')
def send_with_gmail():
    gmail_url = get_gmail_url()

    return render_template('redirect.html', url=gmail_url)

@app.route('/yahoo')
def send_with_yahoo():
    yahoo_url = get_yahoo_url()
    return render_template('redirect.html', url=yahoo_url)

def get_email_contents():
    global EMAIL_DATA
    if EMAIL_DATA == None:
        with open("templates/email-template.json", "r") as f:
            EMAIL_DATA = json.loads(f.read())
    return EMAIL_DATA

def get_gmail_url():
    data = get_email_contents()
    subject = data["subject"]
    message = data["message"]
    
    gmail_url = 'https://mail.google.com/mail/?view=cm&fm=1&su={subject}&body={body}'.format(subject=subject, body=message)
    return gmail_url

def get_yahoo_url():
    data = get_email_contents()
    subject = data["subject"]
    message = data["message"]

    yahoo_url = 'https://mail.yahoo.com/?subject={subject}&body={body}'.format(subject=subject, body=message)
    return yahoo_url