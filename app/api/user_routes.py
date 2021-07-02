from flask import Blueprint, jsonify, request
from app.models import db, User, Card, Comment
from flask_login import current_user, login_required

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/', methods=['PUT'])
def edit_user():
    user_id = int(current_user.id)
    res = request.get_json()
    user = db.session.query(User).get(user_id)
    if(res['password'] != res['repeatPassword']):
        return {errors:["Password Does Not Match"]}
    else:
        user.username = res['username']
        user.email = res['email']
        user.avatar_link = res['image']
        user.hashed_password = res['password']
        db.session.commit()
        return {user: [user.to_dict()]}

@user_routes.route('/', methods=['DELETE'])
def delete_user():
    user_id = int(current_user.id)
    user= db.session.query(User).get( user_id)
    db.session.delete(user)
    db.session.commit()
    return {user: [user.to_dict()]}
