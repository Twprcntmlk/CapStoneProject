from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment, Deck
from flask_login import current_user, login_user, logout_user, login_required

deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/')
def get_deck(): #getting cards in deck
    userId = int(current_user.id)

    specficDeck = db.session.query(Deck).filter(Deck.user_id == userId).first()
    return { 'decks':[specficDeck.to_dict()] }

# @deck_routes.route('/', methods=['POST'])
# def add_card_to_deck ():
#     userId = int(current_user.id)
#     res = request.get_json()
#     print("WHERE AM  I _______",res)
#     deckExists = db.session.query(Deck).get(userId)
#     if()
#     addDeck = Deck(user_id =userId, deck= res['deck'])
#     db.session.add(addDeck)
#     db.session.commit()
#     return { 'decks': addDeck}

@deck_routes.route('/', methods=['PUT'])
def update_deck ():
    userId = int(current_user.id)
    res = request.get_json()
    deckToUpdated = db.session.query(Deck).filter(Deck.user_id == userId).first()
    deckToUpdated.deck = res['deck']
    db.session.commit()
    return { 'decks': deckToUpdated }

@deck_routes.route('/delete', methods=['PUT'])
def delete_deck():
    userId = int(current_user.id)
    deckToDelete = db.session.query(Deck).filter(Deck.user_id == userId).first()
    deckToDelete.deck = ""
    db.session.commit()
    return { 'decks': deckToDelete }
