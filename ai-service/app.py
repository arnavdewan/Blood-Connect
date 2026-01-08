from flask import Flask, request, jsonify
from predict import predict_image
import os

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files["image"]
    temp_path = "temp.png"
    image.save(temp_path)

    result, confidence = predict_image(temp_path)

    os.remove(temp_path)

    return jsonify({
        "result": result,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
