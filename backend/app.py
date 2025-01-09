from flask import Flask, render_template, jsonify, session
from config import Config
import json
import os

app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = 'your_secret_key'  # Add a secret key for session management

# Initialize visitor count
visitor_count_file = "/workspaces/IITVELWebVerNew/data/visitor_count.json"
if not os.path.exists(visitor_count_file):
    with open(visitor_count_file, 'w') as f:
        json.dump({"count": 0}, f)

def get_visitor_count():
    with open(visitor_count_file) as f:
        data = json.load(f)
    return data["count"]

def increment_visitor_count():
    with open(visitor_count_file, 'r+') as f:
        data = json.load(f)
        data["count"] += 1
        f.seek(0)
        json.dump(data, f)
        f.truncate()

@app.before_request
def track_visitor():
    if 'visited' not in session:
        session['visited'] = True
        increment_visitor_count()

@app.route('/')
def home():
    visitor_count = get_visitor_count()
    return render_template('index.html', visitor_count=visitor_count)

@app.route('/experiments')
def experiments():
    # Load the experiment data from the JSON file
    json_path = "/workspaces/IITVELWebVerNew/data/experiment_data.json"
    try:
        with open(json_path) as f:
            experiments_data = json.load(f)
    except FileNotFoundError:
        return "Experiment data file not found!", 500
    return render_template('experiments.html', experiments=experiments_data)

@app.route('/instructions')
def instructions():
    return render_template('instructions.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route("/api/experiments")
def get_experiments():
    json_path = "/workspaces/IITVELWebVerNew/data/experiment_data.json"
    try:
        with open(json_path) as f:
            experiments_data = json.load(f)
    except FileNotFoundError:
        return jsonify({"error": "Experiment data file not found!"}), 500
    
    return jsonify(experiments_data)

@app.route("/api/visitor_count")
def get_visitor_count_api():
    visitor_count = get_visitor_count()
    return jsonify({"count": visitor_count})

if __name__ == '__main__':
    app.run(debug=True, port=5000)