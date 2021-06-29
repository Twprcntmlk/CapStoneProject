from app.models import db, User, Collection, Deck, Card, Comment
from faker import Faker
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_cards():


    temp = Card(api_card_id = '6983839',
    api_card_name = "Tornado Dragon",
    api_card_type = "XYZ Monster",
    api_card_desc = "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
    api_card_atk ="2100",
    api_card_def ="2000",
    api_card_level ="4",
    api_card_race ="Wyrm",
    api_card_attribute ="WIND",
    api_card_sets ='''[{"set_name":"Battles of Legend: Relentless Revenge","set_code":"BLRR-EN084","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"4.94"},{"set_name":"Duel Devastator","set_code":"DUDE-EN019","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"2.56"},{"set_name":"Maximum Crisis","set_code":"MACR-EN081","set_rarity":"Secret Rare","set_rarity_code":"(ScR)","set_price":"7.67"}]''',
    api_card_images ='''[{"id":6983839,"image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg","image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"}]''',
    api_card_prices ='''[{"cardmarket_price":"0.63","tcgplayer_price":"1.70","ebay_price":"5.00","amazon_price":"2.07","coolstuffinc_price":"0.99"}]''',
    count = 1)
    db.session.add(temp)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
