from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment
from flask_login import current_user, login_required

deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/<int:deck_id>')
def get_deck_cards(deck_id): #getting cards in deck
    userId = int(current_user.id)
    deckCards = db.session.query(Deck).filter(Deck.user_id == userId).all()
    decks = [ cards.to_dict() for cards in deckCards ]
    return { 'decks':decks }

@deck_routes.route('/<int:card_id>', methods=['POST'])
def add_card_to_deck ():
    userId = int(current_user.id)
    res = request.get_json()
    #first see if the card is already in the collection and see if there are less than 3
    specficCard = db.session.query(Deck).filter(Card.card_id == card_id)
    # if I return a card I'm going to send to thunk to resend back to my PUT route
    if(specficCard):
        return { 'cards': specficCard }
    else :
        addCard = Card(
        collection_id =res['collection_id'],
        deck_id = None,
        api_card_id =res['card_id'],
        count = 1
        )

        db.session.add(addCard)
        db.session.commit()
        return { 'cards': addCard}

@deck_routes.route('/<int:id>', methods=['DELETE'])
def delete_deck(id):
    deckToDelete = db.session.query(Deck).get(id)
    db.session.delete(deckToDelete )
    db.session.commit()
    return {"response" : "Your Deck Had Been Deleted"}
