from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_collections():

    for i in range(1,5):
        temp = Collections(f_name=faker.first_name(), l_name=faker.last_name(), username=faker.user_name(), email=faker.email(), hashed_password=hash_password, profile_image="https://secure.gravatar.com/avatar/35b3964ef953ef99791b7c98078d919e?secure=true&size=300", coin_balance=1000)
        db.session.add(temp)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
