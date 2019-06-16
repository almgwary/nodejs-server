const server = require('./configs/server')();
const config = require('./configs/config');
const database = require('./configs/database');

//create the basic server setup 
server.create(config, database);

//start the server
server.start();
