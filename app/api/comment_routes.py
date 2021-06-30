from flask import Blueprint, jsonify, request
from app.models import db, User, Collection, Deck, Card, Comment
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def getting_comments():
    userId = 1
    userComment = db.session.query(Comment).order_by(Comment.created_at)
    comment = [comment.to_dict() for comment in userComment]
    return {'comment': comment}

@comment_routes.route('/')
def adding_user_comments():
    res = request.get_json()
    userId = int(current_user.id)
    comment = Comment (user_id = userId, deck_id = res['deck_id'], comment=res['comment'],)
    db.session.add(comment)
    db.session.commit()
    return {'comment': [comment.to_dict()]}

@comment_routes.route('/<int:comment_id>', methods=['PUT'])
def editing_user_comments():
    res = request.get_json()
    userId = int(current_user.id)
    userComment = db.session.query(Comment).get(comment_id)
    userComment.comment = res['comment']
    db.session.commit()
    return {'comment': [userComment.to_dict()]}

@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
def deleting_user_comments(comment_id):
    userId = int(current_user.id)
    res = request.get_json()
    userComment= db.session.query(Comment).get(comment_id)
    db.session.delete(userCollection)
    db.session.commit()
    return {'comment': [userComment.to_dict()]}
