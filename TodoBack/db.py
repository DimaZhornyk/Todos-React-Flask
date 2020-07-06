# db connection here
import pymongo

client = pymongo.MongoClient(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false")
db = client.Todo
Users = db.users
