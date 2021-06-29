from .db import db
from datetime import datetime

class Deck(db.Model):
    __tablename__='decks'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey('cards.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now(), server_onupdate=db.func.now())

    comments = db.relationship('Comment', back_populates='decks')
    users = db.relationship('User', cascade="all,delete", back_populates='decks')
    cards= db.relationship('Card', back_populates='decks')


    def to_dict(self):
        # card_deck = [card.to_dict() for card in self.cards if cards.id == self.card_id]

        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            # 'card_deck':self.card_deck
        }
