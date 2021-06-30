from .db import db
from datetime import datetime

class Comment(db.Model):
    __tablename__='comments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)
    comments = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now(),  server_onupdate=db.func.now())

    users = db.relationship('User', cascade="all,delete", back_populates='comments')
    decks = db.relationship('Deck', back_populates='comments')

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'deck_id': self.deck_id,
            'comments': self.comments,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
