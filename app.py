from flask import Flask, render_template, redirect, url_for

# Initialize the Flask application
app = Flask(__name__)

# Configuration settings
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your_secret_key'

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# Experiments route
@app.route('/experiments')
def experiments():
    return render_template('experiments.html')

# About route
@app.route('/about')
def about():
    return render_template('about.html')

# Contact route
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Custom error handler for 404 errors
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

# Custom error handler for 500 errors
@app.errorhandler(500)
def internal_server_error(error):
    return render_template('500.html'), 500

# Static files route
@app.route('/static/<path:filename>')
def static_files(filename):
    return redirect(url_for('static', filename=filename))

# Run the application
if __name__ == '__main__':
    app.run()