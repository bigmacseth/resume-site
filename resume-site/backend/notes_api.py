from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse, fields, marshal_with, abort, request
from flask_cors import CORS
import os

notes_app = Flask(__name__)
notes_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(notes_app)
api = Api(notes_app)

CORS(notes_app)

class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    content = db.Column(db.Text)
    encrypted = db.Column(db.Boolean, default=True)

@notes_app.route('/add_note', methods=["POST"])
def add_note():
    
    data = request.json
    new_note = Note(title=data["title"], content=data["content"])
    db.session.add(new_note)
    db.session.commit()
    return jsonify({"message": "Note saved!"}), 201

@notes_app.route('/notes', methods=["GET"])
def get_notes():
    notes = Note.query.all()
    return jsonify([{"id": note.id, "title": note.title, "content": note.content} for note in notes])
    
    
    

if __name__ == '__main__':
    notes_app.run(port='1221', debug=True)