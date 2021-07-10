from .db import db
from .collection import collections
from .deck import Deck

class Card(db.Model):
    __tablename__='cards'
    id = db.Column(db.Integer, primary_key=True)

    api_id = db.Column(db.Integer)
    api_name = db.Column(db.String)
    api_set_name = db.Column(db.String)
    api_set_code = db.Column(db.String)
    api_set_rarity = db.Column(db.String)
    api_set_price = db.Column(db.String)

    collections_users= db.relationship('User', secondary=collections, back_populates='collections_cards')
    comments = db.relationship('Comment', cascade="all,delete", back_populates='cards')

    def to_dict(self):

        return {
            'id': self.id,
            'api_id':self.api_id,
            'api_name':self.api_name,
            'api_set_name': self.api_set_name,
            'api_set_code':self.api_set_code,
            'api_set_rarity':self.api_set_rarity,
            'api_set_price': self.api_set_price
        }

# https://db.ygoprodeck.com/api/v7/cardinfo.php?id=6983839
# information returned strcuture --> {data:[]}
# "id":6983839,
# "name":"Tornado Dragon",
# "type":"XYZ Monster",
# "desc":"2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
# "atk":2100,
# "def":2000,
# "level":4,
# "race":"Wyrm",
# "attribute":"WIND",
# "card_sets":[{"set_name":"Battles of Legend: Relentless Revenge","set_code":"BLRR-EN084","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"4.94"},{"set_name":"Duel Devastator","set_code":"DUDE-EN019","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"2.56"},{"set_name":"Maximum Crisis","set_code":"MACR-EN081","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"7.67"}],
# "card_images":[{"id":6983839,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"}],
# "card_prices":[{"cardmarket_price":"0.63","tcgplayer_price":"1.70","ebay_price":"5.00","amazon_price":"2.07","coolstuffinc_price":"0.99"}]}]}
