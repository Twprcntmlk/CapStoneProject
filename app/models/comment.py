from .db import db
from datetime import datetime

class Comment(db.Model):
    __tablename__='comments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    card_id = db.Column(db.Integer, db.ForeignKey('cards.id'), nullable=False)
    comments = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now(),  server_onupdate=db.func.now())

    users = db.relationship('User', back_populates='comments')
    cards = db.relationship('Card', back_populates='comments')

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'card_id': self.card_id,
            'comments': self.comments,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
