from flask import Blueprint, jsonify, request
from app.models import db, User, Collection, Deck, Card, Comment
from flask_login import current_user, login_required

card_routes = Blueprint('cards', __name__)

@card_routes.route('/collection/<int:collection_id>')
def get_cards(collection_id):
    userId = 1
    collectionCard = db.session.query(Card).filter(Card.id == Collection.card_id)
    cards = [ cards.to_dict() for cards in collectionCard ]
    return { 'cards':cards }

@card_routes.route('/deck/<int:deck_id>')
def get_deck_cards(deck_id):
    userId = 1
    deckCards = db.session.query(Card).filter(Card.id == Deck.card_id)
    cards = [ cards.to_dict() for cards in deckCards ]
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
        api_card_id =res['id'],
        api_card_name =res['name'],
        api_card_type =res['type'],
        api_card_desc =res['desc'],
        api_card_atk =res['atk'],
        api_card_def =res['def'],
        api_card_level =res['level'],
        api_card_race =res['race'],
        api_card_attribute =res['attribute'],
        api_card_sets =res['card_sets'],
        api_card_images =res['card_images'],
        api_card_prices =res['card_prices'],
        count = 1)

        db.session.add(addCard)
        db.session.commit()
        return { 'cards': addCard}

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
