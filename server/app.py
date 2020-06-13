from flask import Flask, redirect, render_template, url_for
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('redirect.html')
