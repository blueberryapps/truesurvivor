import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import initializeAPI from './api';
import config from './config.json';
import socket from 'socket.io';
import session from 'express-session'
import Store from './store/global'

global.__DEV__ = process.env.NODE_ENV === 'dev';
global.Promise = require('bluebird').Promise;


const app = express();

const server = http.Server(app)

const io = socket(server);

const global_store = new Store();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(session({
	secret: '1234567890'
}))

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb(db => {

	initializeAPI({ config, db, io, global_store });

	server.listen(process.env.PORT || config.port, () => {
		console.log(`===> It has begain on port ${server.address().port}!`);
	});
});

export default app;
