from app.models import db, User, Card, Comment
from faker import Faker
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_comments():

    for i in range(1, 4):
        for j in range (1,200):
            temp = Comment(user_id=i, card_id=j, comments=faker.text())
            db.session.add(temp)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
