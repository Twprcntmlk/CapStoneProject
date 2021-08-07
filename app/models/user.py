from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .collection import collections
from .deck import Deck

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(db.String(255))
    coin_balance = db.Column(db.Integer, nullable=False)
    admin = db.Column(db.Boolean, default=True)

    # collections = db.relationship('Collection', back_populates='users')
    decks = db.relationship('Deck', cascade="all,delete", back_populates='users')
    # decks_cards = db.relationship('Card', secondary=decks, back_populates='decks_users',cascade="all,delete")
    collections_cards= db.relationship('Card', secondary=collections,  back_populates='collections_users',cascade="all,delete")
    comments = db.relationship('Comment', back_populates='users',cascade="all,delete")

    def to_dict(self):

        user_collection = [collection.to_dict() for collection in self.collections_cards  ]
        user_decks = [deck.to_dict() for deck in self.decks if deck.user_id == self.id]
        user_comments = [comment.to_dict() for comment in self.comments ]

        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "hashed_password": self.hashed_password,
            "profile_image": self.profile_image,
            "coin_balance" : self.coin_balance,
            "admin":self.admin,
            "user_comments": user_comments,
            "user_decks": user_decks,
            "user_collection": user_collection,
        }

    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)
