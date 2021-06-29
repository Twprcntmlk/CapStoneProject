from .db import db
from datetime import datetime
from app.models import User, Collection, Deck, Card, Comment

class Deck(db.Model):
    __tablename__='decks'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey(Card.id), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())

    comments = db.relationship('Comment', back_populates='decks')
    users = db.relationship('User', back_populates='decks', cascade="all,delete")
    cards= db.relationship('Card', back_populates='decks')

    card_deck = [deck.to_dict() for deck in self.decks if deck.card_id == card.id]

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'card_deck':self.card_deck
        }
