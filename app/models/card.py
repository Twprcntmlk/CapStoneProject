from .db import db
from datetime import datetime
from app.models import User, Collection, Deck, Card, Comment

class Card(db.Model):
    __tablename__='cards'
    id = db.Column(db.Integer, primary_key=True)
    # collection_id = db.Column(db.Integer, db.ForeignKey(Collection.id), nullable=False)
    # deck_id = db.Column(db.Integer, db.ForeignKey(Deck.id))
    api_card_id = db.Column(db.Integer, nullable=False)
    api_card_name = db.Column(db.String)
    api_card_type = db.Column(db.String)
    api_card_atk = db.Column(db.String)
    api_card_def = db.Column(db.String)
    api_card_level = db.Column(db.String)
    api_card_race = db.Column(db.String)
    api_card_attribute = db.Column(db.String)
    api_card_sets = db.Column(db.String)
    api_card_images = db.Column(db.String)
    api_card_prices = db.Column(db.String)
    count = db.Column(db.Integer, nullable=False)

    decks = db.relationship('Deck', back_populates='cards', cascade="all,delete")
    collections= db.relationship('Collection', back_populates='cards ')

    def to_dict(self):

        return {
            'id': self.id,
            'deck_id':self.deck_id,
            'api_card_id':self.api_card_id,
            'api_card_name':self.api_card_name,
            'api_card_type':self.api_card_type,
            'api_card_atk':self.api_card_atk,
            'api_card_def': self.api_card_def,
            'api_card_level': self.api_card_level,
            'api_card_race':self.api_card_race,
            'api_card_attribute':self.api_card_attribute,
            'api_card_sets':self.api_card_sets,
            'api_card_images':self.api_card_images,
            'api_card_prices':self.api_card_prices,
            'count':self.count
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
