from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment
from flask_login import current_user, login_required
from sqlalchemy.sql.expression import func

card_routes = Blueprint('cards', __name__)

@card_routes.route('/')
def get_cards():
    userId = int(current_user.id)
    all_cards = db.session.query(Card)
    cards = [ cards.to_dict() for cards in all_cards]
    return { 'cards': cards }

# @card_routes.route('/random')
# def get_random_cards():
#     userId = int(current_user.id)
#     all_cards = db.session.query(Card).order_by(func.random()).limit(9).all()
#     cards = [ cards.to_dict() for cards in all_cards]
#     return { 'cards': cards }


@card_routes.route('/<int:card_id>')
def get_deck_cards(card_id):
    Cards = db.session.query(Card).filter(Card.api_id == card_id)
    cards = [ cards.to_dict() for cards in Cards ]
    return { 'cards':cards }

@card_routes.route('/', methods=['POST'])
def add_card ():
    userId = int(current_user.id)
    res = request.get_json()
    print("AM I GETTING HERE____________________________________",res)
    #first see if the card is already in the collection and see if there are less than 3
    CardExists =  db.session.query(db.session.query(Card).filter(Card.api_id == res['api_id']).exists()).scalar()
    # if I return a card I'm going to send to thunk to resend back to my PUT route
    if(CardExists) :
        return { 'errors': "Card Already Exist in Database" }
    else :
        addCard = Card(
        api_id=res['api_id'],
        api_name= res['api_name'],
        api_set_name = res['api_set_name'],
        api_set_code = res['api_set_code'],
        api_set_rarity= res['api_set_rarity'],
        api_set_price = res['api_set_price'])
        db.session.add(addCard)
        db.session.commit()
        return {'cards': addCard.to_dict() }


@card_routes.route('/<int:card_id>', methods=['PUT'])
def edit_card (card_id):
    userId = int(current_user.id)
    res = request.get_json()

    #first see if the card is already in the collection and see if there are less than 3
    specficCard = db.session.query(Card).get(card_id)

    if(specficCard) :
        specficCard.api_id=res['api_id'],
        specficCard.api_name= res['api_name'],
        specficCardapi_set_name = res['api_set_name'],
        specficCard.api_set_code = res['api_set_code'],
        specficCard.api_set_rarity= res['api_set_rarity'],
        specficCard.api_set_price = res['api_set_price']
        db.session.add(specficCard)
        db.session.commit()
        return { 'cards': specficCard.to_dict()}
    else :
        return { 'errors': "Card is NOT in Database"}

@card_routes.route('/<int:card_id>', methods=['DELETE'])
def delete_card (card_id):
    # res = request.get_json()
    #first see if the card is already in the collection and see if there are less than 3
    specficCard = db.session.query(Card).get(card_id)
    # if I return a card I'm going to send to thunk to resend back to my PUT route
    print("WHAT AM I GETTING HERE_____________________", { 'cards': specficCard})
    db.session.delete(specficCard)
    db.session.commit()
    return { 'cards': specficCard.to_dict()}
