from .db import db
from datetime import datetime

class Collection(db.Model):
    __tablename__='collections'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey('cards.id'), nullable=False)

    users = db.relationship('User', cascade="all,delete", back_populates='collections')
    cards= db.relationship('Card', back_populates='collections')

    def to_dict(self):
        card_collection = [card.to_dict() for card in self.cards if self.user_id == self.users.id]
        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'card_collection': self.card_collection
        }

