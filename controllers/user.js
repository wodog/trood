'use strict'

const User = require('../proxy').User;
const debug = require('debug')('trood:controllers/user');

exports.index = (req, res, next) => {
	res.send('this is user api');
};

exports.getUserByLoginName = (req, res, next) => {
	debug(req.params);
	User.getUserByLoginName(req.params.loginname).then((data) => {
		debug(data);
		res.json(data);
	});
};

exports.newAndSave = (req, res, next) => {
	debug(req.query);
	User.newAndSave(req.query.name, req.query.loginname, req.query.pass, req.query.email).then(() => {
		debug('ok');
		res.send('save success');
	});
}
