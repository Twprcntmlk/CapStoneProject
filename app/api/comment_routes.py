from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def getting_comments():
    userComment = db.session.query(Comment).order_by(Comment.created_at)
    comment = [comment.to_dict() for comment in userComment]
    return {'comments': comment}

@comment_routes.route('/', methods=['POST'])
def adding_user_comments():
    res = request.get_json()
    userId = int(current_user.id)

    comment = Comment (user_id = userId, card_id = int(res['card_id']), comments=res['comment'])
    db.session.add(comment)
    db.session.commit()
    return {'comment': comment.to_dict()}

@comment_routes.route('/<int:comment_id>', methods=['PUT'])
def editing_user_comments(comment_id):

    res = request.get_json()
    print("WHAT_______", res)
    userId = int(current_user.id)
    userComment = db.session.query(Comment).get(comment_id)
    userComment.comments = res['comment']
    db.session.commit()
    return {'comment': userComment.to_dict()}

@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
def deleting_user_comments(comment_id):
    userComment= db.session.query(Comment).get(comment_id)
    db.session.delete(userComment)
    db.session.commit()
    return {}
