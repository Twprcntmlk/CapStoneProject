from .db import db
from datetime import datetime
from app.models import User, Collection, Deck, Card, Comment

class Collection(db.Model):
    __tablename__='collections'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey(Card.id), nullable=False)

    users = db.relationship('User', back_populates='collections', cascade="all,delete")
    cards= db.relationship('Card', back_populates='collections')

    card_collection = [collection.to_dict() for collection in self.collections if collection.card_id == card.id]

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'card_collection': self.card_collection
        }
