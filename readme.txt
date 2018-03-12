Tutorial:
https://auth0.com/blog/developing-restful-apis-with-hapijs/

Prerequisites:
    Install mongodb
        https://treehouse.github.io/installation-guides/mac/mongo-mac.html
        Install with homebrew:
            brew update
            brew install mongodb
            Add the mongodb data directory
                mkdir -p /data/db
                or sudo mkdir -p /data/db
            Make sure the data directory has the correct permission
                sudo chown -R `id -un` /data/db
    Run the Mongo daemon
        in one of your terminal windows run mongod. This should start the Mongo server.
        To stop the Mongo daemon hit ctrl-c

    Run the Mongo shell
        with the Mongo daemon running in one terminal, type mongo in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
        To exit the Mongo shell run quit()

    Install a MongoDB GUI, Robo 3T, formerly known as RoboMongo.
        You can then run mongod from the terminal to start up the MongoDB service on your machine.

    Use Advance Rest Client or Postman for testing
        https://install.advancedrestclient.com/#/install
        https://www.getpostman.com/

=========================================
Tutorial
=========================================
GENERIC SETUP *****************************************

1) npm init
2) Setup eslint
    https://eslint.org/docs/user-guide/getting-started
    a. npm install eslint --save-dev
    b. ./node_modules/.bin/eslint --init
    c. To Run: ./node_modules/.bin/eslint yourfile.js
3) From root dir:
    npm install --save babel-core babel-preset-es2015 hapi
4) Setup .babelrc
    { "presets": [ "es2015" ] }
5) Create .gitignore file at root
    add node_modules to .gitignore

GENERIC SETUP *****************************************
1) Install Mongoose
    Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
    https://www.npmjs.com/package/mongoose
        npm install --save mongoose

2) Create src dir with subdirs models and controllers
    models for schema, controllers for logic
3) Define dog schema -> src/models/dog.js
4) Create dogs controller -> src/controllers/dog.js
5) Create server.js to map controllers to routes/handlers
6) Add bootstrap.js file to route to make it easier to fire up the app
7) Add "start" to "scripts" in package.json

6) Fire It Up!
    mongod
    mongo
    npm start
    start Robo 3T
    Start arc app to interact more easily

TODO: how to seed database?

Securing with JSON web tokens
"Whenever the user wants to access a protected route or resource (an endpoint), the user agent must send the JWT, usually in the Authorization header using the Bearer schema, along with the request."

"When the API receives a request with a JWT, the first thing it does is to validate the token. This consists of a series of steps, and if any of these fails then, the request must be rejected. The following list shows the validation steps needed:

Check that the JWT is well-formed.
Check the signature.
Validate the standard claims.
Check the Client permissions (scopes)."

7) Sign up for Auth0 (https://auth0.com)
8) On Auth0 create a new API
9) Install new dependencies
    npm install jwks-rsa salzhrani/hapi-auth-jwt2#v-17 --save
=============================
The hapi-auth-jwt2 module is a library that validates a JSON Web Token in your headers, query or cookies for your application. At the time of this writing, a PR has been submitted to support Hapi v17. We can only make use of the repo by installing it via the GitHub repo.

The jwks-rsa module is a library that helps retrieve RSA public keys from a JSON Web Key Set endpoint.

We just secured all the post, put, and delete API endpoints with JWT. If a user accesses these API endpoint/route without a valid access token or no token at all, it returns an error. Try it out.

Go ahead and test it with a valid access token. Head over to the test tab of your newly created API on your Auth0 dashboard.
    - Find 'Copy Token on dashboard'
=============================

10) Added back mongoose.connect() after await server.start()

-- Encountered problem with auth0/node-jwks-rsa where in
    module module.exports.hapiJwt2Key
        return function secretProvider(decoded, cb)
        Hapi v17 no longer provides a callback funtion
            Fix exists but has not been landed into auth0 repository
                https://github.com/auth0/node-jwks-rsa/pull/34/files
