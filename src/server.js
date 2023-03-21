require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const {PORT, HOST} = process.env;

const init = async () => {
  // configure the server
  const server = Hapi.server({
    port: PORT || 9000,
    host: HOST || 'localhost',
    routes: { // add the cors into the routes
      cors: {
        origin: ['*'],
      },
    },
  });
  // add the routes
  server.route(routes);
  // start the server
  await server.start();
  // create the information
  console.log(`Running in ${server.info.uri}`);
};

init();
