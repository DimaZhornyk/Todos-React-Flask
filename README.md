
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Endpoints:
* #### /register(POST)         example body: {"login": "admin", "password": "admin"}, returns you a JWT token and creates a collection in Mongo for this user 
* #### /login(POST)         example body: {"login": "admin", "password": "admin"}, returns you a JWT token
* #### /todo(POST)         example body:{'todos': [{'id': 1, 'body': '1', 'completed': False, 'deadline': 1600034273977}, {'id': 5, 'body': 'asd', 'completed': True, 'deadline': 1593774960000}, {'id': 6, 'body': 'rr', 'completed': True, 'deadline': 1593785760000}, {'id': 7, 'body': 'Vasd', 'completed': False, 'deadline': 1594224420000}, {'id': 8, 'body': 'Vasdd', 'completed': False, 'deadline': 1594224420000}], 'maxId': 11}, saves a list of todos to Mongo :exclamation: requires JWT
* #### /todo(GET)        returns a list of user's todos :exclamation: requires JWT
