from app.models import db, User, Collection, Deck, Card, Comment
from faker import Faker
faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_cards():

    card_seeds = [
        {"api_id":89631146,"api_name":"Blue-Eyes White Dragon","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-001","api_set_rarity":"Ultra Rare","api_set_price":"189.37"},
        {"api_id":76184692,"api_name":"Hitotsu-Me Giant","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-002","api_set_rarity":"Common","api_set_price":"1.04"},
        {"api_id":45231178,"api_name":"Flame Swordsman","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-003","api_set_rarity":"Super Rare","api_set_price":"7.35"},
        {"api_id":32274490,"api_name":"Skull Servant","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-004","api_set_rarity":"Common","api_set_price":"2.88"},
        {"api_id":46986421,"api_name":"Dark Magician","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-005","api_set_rarity":"Ultra Rare","api_set_price":"47.7"},
        {"api_id":6368039,"api_name":"Gaia The Fierce Knight","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-006","api_set_rarity":"Ultra Rare","api_set_price":"11.92"},
        {"api_id":91152258,"api_name":"Celtic Guardian","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-007","api_set_rarity":"Super Rare","api_set_price":"4.83"},
        {"api_id":89091579,"api_name":"Basic Insect","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-008","api_set_rarity":"Common","api_set_price":"2.34"},
        {"api_id":40374923,"api_name":"Mammoth Graveyard","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-009","api_set_rarity":"Common","api_set_price":"1.03"},
        {"api_id":90357090,"api_name":"Silver Fang","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-010","api_set_rarity":"Common","api_set_price":"1.04"},
        {"api_id":9159938,"api_name":"Dark Gray","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-011","api_set_rarity":"Common","api_set_price":"1.07"},
        {"api_id":77827521,"api_name":"Trial of Nightmare","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-012","api_set_rarity":"Common","api_set_price":"1.02"},
        {"api_id":90963488,"api_name":"Nemuriko","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-013","api_set_rarity":"Common","api_set_price":"1.04"},
        {"api_id":32864,"api_name":"The 13th Grave","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-014","api_set_rarity":"Common","api_set_price":"2.24"},
        {"api_id":37421579,"api_name":"Charubin the Fire Knight","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-015","api_set_rarity":"Rare","api_set_price":"1.17"},
        {"api_id":34460851,"api_name":"Flame Manipulator","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-016","api_set_rarity":"Common","api_set_price":"1.01"},
        {"api_id":36121917,"api_name":"Monster Egg","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-017","api_set_rarity":"Common","api_set_price":"1"},
        {"api_id":53293545,"api_name":"Firegrass","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-018","api_set_rarity":"Common","api_set_price":"1.02"},
        {"api_id":17881964,"api_name":"Darkfire Dragon","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-019","api_set_rarity":"Rare","api_set_price":"4.2"},
        {"api_id":53375573,"api_name":"Dark King of the Abyss","api_set_name":"Legend of Blue Eyes White Dragon","api_set_code":"LOB-020","api_set_rarity":"Common","api_set_price":"0.96"}
    ]


    for i in range(len(card_seeds)):
        temp = Card(
        api_id = card_seeds[i]["api_id"],
        api_name = card_seeds[i]["api_name"],
        api_set_name= card_seeds[i]["api_set_name"],
        api_set_code = card_seeds[i]["api_set_code"],
        api_set_rarity =card_seeds[i]["api_set_rarity"],
        api_set_price =card_seeds[i]["api_set_price"])
        db.session.add(temp)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
