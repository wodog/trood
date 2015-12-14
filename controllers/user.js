'use strict'

/**
 * module dependencies
 */
const user = require('../proxy/user');
const result = require('../common/result')
const debug = require('debug')('trood:controllers/user');



/**
 * index
 * @param req
 * @param res
 * @param next
 */
exports.index = (req, res, next) => {
	res.send('this is user api');
};

/**
 * get user by id
 * format: GET /api/user/id/xxx
 * @param req
 * @param res
 * @param next
 */
exports.getUserById = (req, res, next) => {
	debug('params: ',req.params);
	user.getUserById(req.params.id).then(data => {
		res.json(new result(true, data));
	}).catch(err => {
        res.json(new result(false, err));
    });
};

/**
 * get user by name
 * format: GET /api/user/name/xxx
 * @param req
 * @param res
 * @param next
 */
exports.getUserByName = (req, res, next) => {
	debug('params: ',req.params);
	user.getUserByName(req.params.name).then(data => {
		res.json(new result(true, data));
	}).catch(err => {
		res.json(new result(false, err));
	});
};

/**
 * add user
 * format: POST /api/user/add?name=xxx&email=xxx&password=xxx&gender=xxx
 * @param req
 * @param res
 * @param next
 */
exports.addUser = (req, res, next) => {
	debug('query: ', req.query);
	user.addUser(req.query).then((data) => {
		res.json(new result(true, data));
	}).catch(err => {
		res.json(new result(false, err));
	});
};