from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin # type: ignore
import random


app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route('/', methods = ['GET', 'POST'])
@cross_origin(supports_credentials=True)
def index():
    return render_template('sample.html')

'''
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
'''
'''
def RollForDamage():
        roll = random.randint(1,21)
        if roll < 12:
            return False
        else:
            return True

class Frog:
    def __init__(self, ID, speed, maximumHealth, currentHealth, minimumHealth):
        self.ID = id
        self.speed = speed
        self.maximumHealth = maximumHealth
        self.currentHealth = currentHealth
        self.miniumHealth = 0

class Weapon:
    def __init__(self, name, maxDamage, minDamage):
        self.name = name
        self.maxDamage = maxDamage
        self.minDamage = minDamage

    

    def DamageCalc(self):
        if RollForDamage() == True:
            dice = random.randint(self.minDamage, self.maxDamage)




class Player:
  #  def __init__(self, Frog frog, Weapon weapon, isCPU):
   #     self.frog = Frog
    #    self.weapon = Weapon
     #   self.isCPU = False


# playable frogs :
#hornyFrog = Frog("South American Horned Frog", 50, 50, 2);
#poisonFrog = Frog("Poison Dart Frog", 28, 28, 5);
#caneToad = Frog("Cane Toad", 42, 42, 3);
#americanBullFrog = Frog("American Bull Frog", 37, 37, 3);
#defFrog = Frog("default", 1, 1, 1);

# playable weapons :
#defWeapon = Weapon("def", 1, 1);
#dagger = Weapon("Dagger", 14, 3);
#greatsword = Weapon("Greatsword", 24, 10);
#longsword = Weapon("Longsword", 10, 5);
#cpuSword = Weapon("cpuWeapon", 10, 5);
'''