from .db import db
# from datetime import datetime

class Deck(db.Model):
    __tablename__='decks'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deck = db.Column(db.Text, nullable=False)

    users = db.relationship('User', back_populates='decks')

    def to_dict(self):
        # card_deck = [card.to_dict() for card in self.cards if self.card_id == card.id]

        return {
            'id': self.id,
            'user_id': self.user_id,
            'deck': self.deck,

            # 'card_deck':self.card_deck
        }

# decks = db.Table('decks',
#     db.Column(
#         "user_id",
#         db.Integer,
#         db.ForeignKey("users.id"),
#         primary_key=True
#     ),
#     db.Column(
#         "card_id",
#         db.Integer,
#         db.ForeignKey("cards.id"),
#         primary_key=True
#     )
# )
