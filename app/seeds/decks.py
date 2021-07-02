# from werkzeug.security import generate_password_hash
# from app.models import db, User, Card, Comment

# # Adds a demo user, you can add other users here if you want
# def seed_decks():

#     for i in range(1,6):
#         temp = Deck(user_id=i, card_id=1)
#         db.session.add(temp)
#     db.session.commit()

# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and resets
# # the auto incrementing primary key
# def undo_decks():
#     db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
#     db.session.commit()
