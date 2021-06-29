from app.models import db, User, Collection, Deck, Card, Comment
from faker import Faker
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_comments():

    for i in range(1, 10):
        for j in range (1,10):
            temp = Comment(user_id=i, deck_id= j, comments=faker.text())
            db.session.add(temp)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
