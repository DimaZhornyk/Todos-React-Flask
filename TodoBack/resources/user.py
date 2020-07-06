from flask_jwt_extended import create_access_token
from flask_restful import Resource, reqparse
from db import Users, db
import time
import bson

_user_parser = reqparse.RequestParser()
_user_parser.add_argument('login', type=str, required=True, help='This field cannot be left blank')
_user_parser.add_argument('password', type=str, required=True, help='This field cannot be left blank')


class UserRegister(Resource):
    def post(self):
        data = _user_parser.parse_args()
        if Users.find({"login": data["login"]}).count():
            return {'message': "User already exists"}, 400
        Users.insert_one({"login": data["login"], "password": data["password"], "maxId": 1})
        print(time.time())
        db[data["login"]].insert_one(
            {"id": 1, "body": "Initial note", "completed": False,
             "deadline": bson.int64.Int64(int(time.time() * 1000 + 60000))})
        return {'message': "User created successfully", "token": create_access_token(identity=data["login"])}, 200


class UserLogin(Resource):

    def post(self):
        data = _user_parser.parse_args()
        # check of user in db
        if Users.find_one({"login": data["login"]})["password"] == data["password"]:
            access_token = create_access_token(identity=data["login"])
            return {'token': access_token}, 200

        return {'message': 'Password is incorrect'}, 401
