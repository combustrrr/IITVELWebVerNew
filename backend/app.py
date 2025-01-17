from flask import Flask, render_template, jsonify, request, make_response
from config import Config
import json
import os
import uuid

app = Flask(__name__)
app.config.from_object(Config)

# Path to the JSON file storing visit counter and device identifiers
counter_file_path = "/workspaces/IITVELWebVerNew/data/visit_counter.json"

def load_counter_data():
    if os.path.exists(counter_file_path):
        with open(counter_file_path) as f:
            return json.load(f)
    return {"visit_counter": 0, "device_ids": []}

def save_counter_data(data):
    with open(counter_file_path, 'w') as f:
        json.dump(data, f)

@app.route('/')
def home():
    # Load counter data
    counter_data = load_counter_data()

    # Check for device_id cookie
    device_id = request.cookies.get('device_id')
    if not device_id:
        # Generate a new device_id and set it as a cookie
        device_id = str(uuid.uuid4())
        response = make_response(render_template('index.html'))
        response.set_cookie('device_id', device_id, max_age=60*60*24*365*2)  # 2 years

        # Increment visit counter if it's a new device
        if device_id not in counter_data['device_ids']:
            counter_data['visit_counter'] += 1
            counter_data['device_ids'].append(device_id)
            save_counter_data(counter_data)
        return response

    return render_template('index.html')

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

@app.route('/api/visit_counter')
def get_visit_counter():
    counter_data = load_counter_data()
    return jsonify({"visit_counter": counter_data['visit_counter']})

if __name__ == '__main__':
    app.run(debug=True)