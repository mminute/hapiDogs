const DogController = require('./controllers/dog.js');
const Hapi = require('hapi');
const hapiAuthJWT = require('hapi-auth-jwt2');
const jwksRsa = require('jwks-rsa');
const mongoose = require('mongoose');

const MongoDBUrl = 'mongodb://localhost:27017/dogapi';

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

const validateUsers = (decoded, request, callback) => {
  // This is a simple check that the `sub` claim
  // exists in the access token. Modify it to suit
  // the needs of your application
  if (decoded && decoded.sub) {
    return callback(null, true, {});
  }

  return callback(null, false, {});
};

const registerRoutes = () => {
  server.route({
    method: 'GET',
    path: '/dogs',
    handler: DogController.list,
  });

  server.route({
    method: 'GET',
    path: '/dogs/{id}',
    handler: DogController.get,
  });

  server.route({
    method: 'POST',
    path: '/dogs',
    handler: DogController.create,
  });

  server.route({
    method: 'PUT',
    path: '/dogs/{id}',
    handler: DogController.update,
  });

  server.route({
    method: 'DELETE',
    path: '/dogs/{id}',
    handler: DogController.remove,
  });
};

const init = async () => {
  await server.register(hapiAuthJWT);
  server.auth.strategy('jwt', 'jwt', {
    key: jwksRsa.hapiJwt2Key({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
      jwksUri: 'https://hapidogs.auth0.com/.well-known/jwks.json',
    }),
    verifyOptions: {
      audience: 'https://mydogapi.com.}',
      issuer: 'https://hapidogs.auth0.com/',
      algorithms: ['RS256'],
    },
    validate: validateUsers,
  });

  server.auth.default('jwt');

  registerRoutes();

  await server.start();
  // Once started, connect to Mongo through Mongoose
  mongoose
    .connect(MongoDBUrl, {})
    .then(
      () => { console.log('Connected to Mongo server'); },
      (err) => { console.log('Mongoose/Mongo error:', err); },
    );
  return server;
};

init().then((srver) => {
  console.log('Server running at:', srver.info.uri);
}).catch((err) => {
  console.log(err);
});
