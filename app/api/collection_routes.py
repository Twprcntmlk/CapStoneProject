from flask import Blueprint, jsonify, request
from app.models import db, User, Collection, Deck, Card, Comment
from flask_login import current_user, login_required

collection_routes = Blueprint('collections', __name__)

@collection_routes.route('/')
def getting_user_collection():
    userId = int(current_user.id)
    userCollection = db.session.query(Collection).filter(Collection.user_id == userId)
    collection = [collection.to_dict() for collection in userCollection]
    return {'collection': collection}


@collection_routes.route('/')
def add_user_collection():
    userId = int(current_user.id)
    res = request.get_json()
    print(res['card_id'])
    addCollection = Collection(
         user_id= userId,
         card_id= res['card_id'])
    db.session.add(addCollection)
    db.session.commit()
    return { 'collections': addCollection}
