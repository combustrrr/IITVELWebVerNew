from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html', title="Home")

@app.route('/experiments')
def experiments():
    return render_template('experiments.html', title="Experiments")

@app.route('/support')
def support():
    return render_template('instructions.html', title="Support")

@app.route('/about')
def about():
    return render_template('about.html', title="About Us")

@app.route('/api/data')
def api_data():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)
