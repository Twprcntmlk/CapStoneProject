from .db import db
from datetime import datetime
from app.models import User, Collection, Deck, Card, Comment

class Comment(db.Model):
    __tablename__='comments'
    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey(Deck.id), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey(Card.id), nullable=False)
    comments = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())

    users = db.relationship('User', cascade="all,delete", back_populates='comments')
    decks = db.relationship('Decks', back_populates='comments')

    def to_dict(self):
        card_collection = [card.to_dict() for card in self.cards if self.card_id == card.id]

        return {
            'id': self.id,
            'user_id': self.user_id,
            'deck_id': self.deck_id,
            'comments': self.comments,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
