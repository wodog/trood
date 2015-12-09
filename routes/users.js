'use strict'

const express = require('express');
const router = express.Router();
const User = require('../proxy').User;
const debug = require('debug')('demo1:routes/users')

/* GET users listing. */

router.get('/', function(req, res, next) {
	debug(req);

});

router.get('/loginname/:loginname', function(req, res, next) {
	debug(req.params);
	User.getUserByLoginName(req.params.loginname).then((data) => {
		debug(data);
	});
});

router.get('/save', (req, res, next) => {
	debug(req.query);
	User.newAndSave(req.query.name, req.query.loginname, req.query.pass, req.query.email).then(() => {
		debug('ok');
	});
});

module.exports = router;
