# db connection here
import pymongo

client = pymongo.MongoClient(
    "here your Mongo db link") #change this after cloning
db = client.Todo
Users = db.users
