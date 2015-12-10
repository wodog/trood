'use strict'

const debug = require('debug')('trood:proxy/user');
const models = require('../models');
const User = models.User;

/**
 * get users by loginnames
 */
exports.getUserByNames = (loginnames) => {
	return new Promise((resolve, reject) => {
		User.find({'loginname': {$in: loginnames}}, (err, data) => {
			if (err) {
				reject(err);
			}
			debug('getUserByNames: ', data);
			resolve(data);
		});
	});
}

/**
 * get user by loginname
 */
exports.getUserByLoginName = (loginname) => {
	return new Promise((resolve, reject) => {
		User.findOne({'loginname': loginname}, (err, data) => {
			if (err) {
				reject(err);
			}
			debug('getUserByLoginName: ', data);
			resolve(data);	
		});
	});
}

exports.getUserById = (id) => {
	return new Promise((resolve, reject) => {
		User.find({'_id': id}, (err, data) => {
			if (err) {
				reject(err);
			}
			debug('getUserById: ', data);
			resolve(data);
		});
	});
}

exports.newAndSave = (name, loginname, pass, email) => {
	return new Promise((resolve, reject) => {
		var user = new User();
		user.name = loginname;
		user.loginname = loginname;
		user.pass = pass;
		user.email = email;
		user.save((err) => {
			if (err) {
				reject(err);
			}
			debug('newAndSave: success');
			resolve();
		});
	});
}
