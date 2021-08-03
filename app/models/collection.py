from .db import db


# class Collection(db.Model):
#     __tablename__='collections'
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, nullable=False) # db.ForeignKey('users.id')
#     card_id = db.Column(db.Integer, nullable=False) # , db.ForeignKey('cards.id')
#     count = db.Column(db.Integer)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user_id': self.user_id,
#             'card_id': self.card_id,
#             'count': self.count
#         }

collections = db.Table('collections',
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "card_id",
        db.Integer,
        db.ForeignKey("cards.id"),
        primary_key=True
    ),
)
