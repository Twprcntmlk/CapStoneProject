from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment, collections
from flask_login import current_user, login_required
from sqlalchemy import insert

collection_routes = Blueprint('collections', __name__)

@collection_routes.route('/')
def getting_user_collection():
    userId = int(current_user.id)
    userCollection = db.session.query(Collection).filter(Collection.user_id == userId)
    collection = [collection.to_dict() for collection in userCollection]
    return {'collections': collection}


@collection_routes.route('/', methods=['POST'])
def add_user_collection():
    userId = int(current_user.id)
    res = request.get_json()


    # userCollectionCount  = db.session.query(User).join(collections).filter(collections.user_id==userId, collections.card_id == res['card_id']).count()
    userCollectionCount = User.query.join(collections).join(Card).filter((collections.c.user_id == userId) & (collections.c.card_id == res['card_id'])).count()

    if(userCollectionCount == 3):
        return {"Did Not Add to Collection, Already 3 in Deck"}
    else:
        addCollection = collections.insert().values(user_id= userId, card_id= res['card_id'])
        db.session.execute(addCollection)
        db.session.commit()
        return { 'collections': addCollection}

# Users.Card.Append()
