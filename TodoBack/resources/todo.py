from flask_restful import Resource, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from db import db, Users


class Todo(Resource):
    @jwt_required
    def get(self):
        try:
            login = get_jwt_identity()
            collection = db[login]
            to_return = [todo for todo in collection.find()]
            for el in to_return:
                el.pop("_id")
            return {"todos": sorted(to_return, key=lambda todo: todo["id"]),
                    "maxId": Users.find_one({"login": login})["maxId"]}, 200
        except:
            return {'message': 'An error occurred while looking for collection'}, 500

    @jwt_required
    def post(self):
        try:
            data = request.get_json(force=True)
            login = get_jwt_identity()
            collection = db[login]
            collection.remove()
            collection.insert_many(data["todos"], ordered=True)
            Users.update_one({"login": login}, {"$set": {"maxId": data["maxId"]}})
            return {"message": "Success"}, 200
        except:
            return {'message': 'An error occurred while looking for collection'}, 500
