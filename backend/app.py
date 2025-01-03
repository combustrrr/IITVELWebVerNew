from flask import Flask, render_template, jsonify
from config import Config
import json
import os

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def home():
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

if __name__ == '__main__':
    app.run(debug=True)