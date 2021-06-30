from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    f_name = db.Column(db.String(40), nullable=False)
    l_name = db.Column(db.String(40), nullable=False)
    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(db.String(255))
    coin_balance = db.Column(db.Integer, nullable=False)

    collections = db.relationship('Collection', back_populates='users')
    decks = db.relationship('Deck', back_populates='users')
    comments = db.relationship('Comment', back_populates='users')

    def to_dict(self):

        # user_collection = [collection.to_dict() for collection in self.collections ]
        # user_decks = [deck.to_dict() for deck in self.decks ]
        user_comments = [comment.to_dict() for comment in self.comments if self.id == comment.user_id ]

        return {
            "id": self.id,
            "f_name": self.f_name,
            "l_name": self.l_name,
            "username": self.username,
            "email": self.email,
            "hashed_password": self.hashed_password,
            "profile_image": self.profile_image,
            "coin_balance" : self.coin_balance,
            "user_comments": user_comments,
            # "user_decks":  user_decks,
            # "user_collection": card_collection,
        }

    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)
