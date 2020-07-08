To run the application you have to connect the existing Mongo db in **db.py** file and use **npm start** command to run the development server

### Endpoints:
* #### /register(POST)         example body: {"login": "admin", "password": "admin"}, returns you a JWT token and creates a collection in Mongo for this user 
* #### /login(POST)         example body: {"login": "admin", "password": "admin"}, returns you a JWT token
* #### /todo(POST)         example body:{'todos': [{'id': 1, 'body': '1', 'completed': False, 'deadline': 1600034273977}, {'id': 5, 'body': 'asd', 'completed': True, 'deadline': 1593774960000}, {'id': 6, 'body': 'rr', 'completed': True, 'deadline': 1593785760000}, {'id': 7, 'body': 'Vasd', 'completed': False, 'deadline': 1594224420000}, {'id': 8, 'body': 'Vasdd', 'completed': False, 'deadline': 1594224420000}], 'maxId': 11}, saves a list of todos to Mongo :exclamation: requires JWT
* #### /todo(GET)        returns a list of user's todos :exclamation: requires JWT
<img src="/screenshots/login.png" width="500" title="Login page">
<img src="/screenshots/main.png" width="500" title="Main page">
<img src="/screenshots/404.png" width="500" title="404 page">
