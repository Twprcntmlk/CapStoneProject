from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment
from flask_login import current_user, login_required
from sqlalchemy.sql.expression import func
import requests

external_routes = Blueprint('external', __name__)

@external_routes.route('/searchcard/<int:api_id>')
def get_card_api_info_searchpage(api_id):
    response = requests.get(f'https://db.ygoprodeck.com/api/v7/cardinfo.php?id={api_id}')
    return response.json()

@external_routes.route('/cardset')
def get_card_api_info_cardset():
    response = requests.get('https://db.ygoprodeck.com/api/v7/cardsets.php')
    reslist = response.json()
    return {'data': reslist}

# @card_routes.route('/<int:card_id>')
# def get_deck_cards(card_id):
#     Cards = db.session.query(Card).filter(Card.api_id == card_id)
#     cards = [ cards.to_dict() for cards in Cards ]
#     return { 'cards':cards }

# @card_routes.route('/', methods=['POST'])
# def add_card ():
#     userId = int(current_user.id)
#     res = request.get_json()

#     #first see if the card is already in the collection and see if there are less than 3
#     specficCard =  db.session.query(db.session.query(Card).filter(Card.api_id == res['api_id']).exists()).scalar()
#     # if I return a card I'm going to send to thunk to resend back to my PUT route
#     if(specficCard) :
#         return { 'errors': "Card Already Exist in Database" }
#     else :
#         addCard = Card(
#         api_id=res['api_id'],
#         api_name= res['api_name'],
#         api_set_name = res['api_set_name'],
#         api_set_code = res['api_set_code'],
#         api_set_rarity= res['api_set_rarity'],
#         api_set_price = res['api_set_price'])
#         db.session.add(addCard)
#         db.session.commit()
#         return { 'cards': addCard }

# @card_routes.route('/<int:card_id>', methods=['PUT'])
# def edit_card (card_id):
#     userId = int(current_user.id)
#     res = request.get_json()

#     #first see if the card is already in the collection and see if there are less than 3
#     specficCard = db.session.query(Card).get(card_id)

#     if(specficCard) :
#         specficCard.api_id=res['api_id'],
#         specficCard.api_name= res['api_name'],
#         specficCardapi_set_name = res['api_set_name'],
#         specficCard.api_set_code = res['api_set_code'],
#         specficCard.api_set_rarity= res['api_set_rarity'],
#         specficCard.api_set_price = res['api_set_price']
#         db.session.add(specficCard)
#         db.session.commit()
#         print("WHAT AM I GETTING HERE_____________________", { 'cards': specficCard})
#         return { 'cards': specficCard.to_dict()}
#     else :
#         return { 'errors': "Card is NOT in Database"}

# @card_routes.route('/<int:card_id>', methods=['DELETE'])
# def delete_card (card_id):
#     # res = request.get_json()
#     #first see if the card is already in the collection and see if there are less than 3
#     specficCard = db.session.query(Card).get(card_id)
#     # if I return a card I'm going to send to thunk to resend back to my PUT route
#     db.session.delete(specficCard)
#     db.session.commit()
#     return { 'cards': specficCard.to_dict()}
