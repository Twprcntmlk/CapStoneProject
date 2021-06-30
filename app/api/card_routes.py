from flask import Blueprint, jsonify, request
from app.models import db, User, Collection, Deck, Card, Comment
from flask_login import current_user, login_required

card_routes = Blueprint('cards', __name__)

@card_routes.route('/')
def get_cards():
    userId = int(current_user.id)
    all_cards = db.session.query(Card)
    cards = [ cards.to_dict() for cards in all_cards]
    return { 'cards': cards }

@card_routes.route('/<int:card_id>')
def get_deck_cards(card_id):
    Cards = db.session.query(Card).filter(Card.api_id == card_id)
    cards = [ cards.to_dict() for cards in Cards ]
    return { 'cards':cards }

@card_routes.route('/<int:card_id>', methods=['POST'])
def add_card (card_id):
    userId = int(current_user.id)
    res = request.get_json()
    #first see if the card is already in the collection and see if there are less than 3
    specficCard = db.session.query(Card).filter(Card.card_id == card_id)
    # if I return a card I'm going to send to thunk to resend back to my PUT route
    if(specficCard):
        return { 'cards': specficCard }
    else :
        addCard = Card(
        collection_id =res['collection_id'],
        deck_id = None,
        api_id=api_id,
        api_name= api_name,
        api_set_name = api_set_name,
        api_set_code = api_set_code,
        api_set_rarity= api_set_rarity,
        api_set_price = api_set_price)
        db.session.add(addCard)
        db.session.commit()
        return { 'cards': addCard }

@card_routes.route('/<int:card_id>', methods=['PUT'])
def increase_card_count (card_id):
    userId = int(current_user.id)
    res = request.get_json()
    #first see if the card is already in the collection and see if there are less than 3
    specficCard = db.session.query(Card).filter(Card.card_id == card_id)
    # if I return a card I'm going to send to thunk to resend back to my PUT route
    specficCard.count = specficCard.count + 1
    db.session.commit()
    return { 'cards': specficCard.to_dict()}
