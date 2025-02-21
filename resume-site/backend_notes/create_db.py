from notes_api import notes_app, db

with notes_app.app_context():
    db.create_all()