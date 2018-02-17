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
1) Create src dir with subdirs models and controllers
    models for schema, controllers for logic
2) Define dog schema -> src/models/dog.js

-- Added .eslintrc file to set to es6 and eliminate 'keyword const is reserved'

3) Create dogs controller -> src/controllers/dog.js

