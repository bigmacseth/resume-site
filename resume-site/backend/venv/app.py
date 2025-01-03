from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
import random


app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route('/', methods = ['GET', 'POST'])
@cross_origin(supports_credentials=True)
def index():
    return render_template('sample.html')

game_state = {}

@app.route('/api/start', methods=['POST'])
def start_game():
    player_id = request.json.get("player_id")
    target_number = random.randint(1, 100)
    game_state[player_id] = {"target": target_number, "attempts": 0}
    return jsonify({"message": "Game started!", "player_id": player_id})

@app.route('/api/guess', methods=['POST'])
def make_guess():
    player_id = request.json.get('player_id')
    guess = int(request.json.get('guess'))

    if player_id not in game_state:
        return jsonify({"error": "Game not found for this player"}), 400
    
    game = game_state[player_id]
    game['attempts'] += 1

    if guess < game['target']:
        return jsonify({"result": "low", "attempts": game['attempts']})
    elif guess > game['target']:
        return jsonify({'result': "high", "attempts": game["attempts"]})
    else: 
        return jsonify({"result": "correct", 'attempts': game["attempts"]})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5555', debug=True)