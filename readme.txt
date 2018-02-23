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
