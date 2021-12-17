# Login System
 
This is a basic login system using Node.js, Express.js, Passport.js, and MongoDB.

------

## Setup
1. Install [Node.js](https://nodejs.org/) if you haven't already. 
2. Clone this repository and install its dependencies.

		> git clone git://github.com/yaboiwierdal/login-system.git login-system
		> cd login-system
		> npm install

3. Create a ``.env`` file and put the following variables:

    - [MONGODB_URI](https://docs.mongodb.com/manual/reference/connection-string/)
    - [SESSION_SECRET](https://expressjs.com/en/resources/middleware/session.html)
  
4. Go to your ``package.json`` file, and add the following line:

		> "type": "module"

5. From within the login-system directory, run the following command to start the server: 

		> node server.js

6. Open a browser and navigate to [http://localhost:3000](http://localhost:3000) or to the custom port you assigned in the ``.env`` file. 

------

## Contributing
Questions and suggestions for improvement are welcome. 
