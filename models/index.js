'use strict'

const mongoose = require('mongoose');
const config = require('../config');
const debug = require('debug')('trood:models/index')

mongoose.connect(config.db, {server: {poolSize: 20}}, (err) => {
	if (err) {
		debug('connect to %s error:', config.db, err.message);
		process.exit(1);
	}
	debug('connect to mongoodb success');
});

exports.User = require('./user');
