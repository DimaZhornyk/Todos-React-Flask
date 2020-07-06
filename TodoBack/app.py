from datetime import timedelta

from flask_jwt_extended import JWTManager
from flask_restful import Api

from flask import Flask

from resources.todo import Todo
from flask_cors import CORS
from resources.user import UserRegister, UserLogin

app = Flask(__name__)
CORS(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'Flask'
api = Api(app)
jwt = JWTManager(app)

api.add_resource(Todo, "/todo/")
api.add_resource(UserRegister, "/register/")
api.add_resource(UserLogin, "/login/")

if __name__ == '__main__':
    app.run()
