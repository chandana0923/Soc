import os
import zipfile

# Project structure
project_name = "language_detection_project"
folders = ["templates", "static"]
files = {
    "requirements.txt": "flask\nlangdetect\n",
    "app.py": """from flask import Flask, request, render_template
from langdetect import detect, detect_langs, DetectorFactory

DetectorFactory.seed = 0

language_names = {
    "en": "English", "fr": "French", "es": "Spanish", "hi": "Hindi",
    "de": "German", "ta": "Tamil", "te": "Telugu"
}

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    text = ""
    result_code = None
    result_name = None
    result_probs = []

    if request.method == "POST":
        text = request.form.get("text")
        if text:
            try:
                langs = detect_langs(text)
                result_code = langs[0].lang
                result_name = language_names.get(result_code, "Unknown")
                result_probs = [(language_names.get(l.lang,"Unknown"), round(l.prob*100,2)) for l in langs[:3]]
            except:
                result_code = "Unknown"
                result_name = "Could not detect"
                result_probs = []

    return render_template("index.html", text=text, result=result_code, full_lang=result_name, probs=result_probs)

if __name__ == "__main__":
    app.run(debug=True)
""",
    os.path.join("templates", "index.html"): """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Language Detection App</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <div class="container">
        <h1>🌍 Language Detection</h1>
        <form method="POST">
            <textarea name="text" placeholder="Type your text here...">{{ text }}</textarea>
            <button type="submit">Detect Language</button>
        </form>

        {% if result %}
        <div class="result">
            <h2>Detected Code: {{ result }}</h2>
            <h2>Language: {{ full_lang }}</h2>
            {% if probs %}
            <h3>Top Probable Languages:</h3>
            <ul>
                {% for lang, prob in probs %}
                <li>{{ lang }} - {{ prob }}%</li>
                {% endfor %}
            </ul>
            {% endif %}
        </div>
        {% endif %}
    </div>
</body>
</html>
""",
    os.path.join("static", "style.css"): """body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #74ebd5, #9face6);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 40px 30px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    max-width: 450px;
    width: 100%;
    text-align: center;
}

h1 { margin-bottom: 15px; }
textarea {
    width: 100%;
    height: 120px;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
}
button {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}
button:hover { background-color: #45a049; }
.result { margin-top: 20px; background: #f3f3f3; padding: 15px; border-radius: 10px; }
ul { text-align: left; margin-top: 10px; }
"""
}

# Create project folder and subfolders
if not os.path.exists(project_name):
    os.makedirs(project_name)
for folder in folders:
    os.makedirs(os.path.join(project_name, folder), exist_ok=True)

# Create all files
for path, content in files.items():
    file_path = os.path.join(project_name, path)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Create ZIP file
zip_name = f"{project_name}.zip"
with zipfile.ZipFile(zip_name, "w") as zipf:
    for root, _, filenames in os.walk(project_name):
        for filename in filenames:
            file_path = os.path.join(root, filename)
            zipf.write(file_path, os.path.relpath(file_path, project_name))

print(f"✅ Project folder and {zip_name} created successfully!")
print("You can now extract the ZIP and run your Flask app.")
