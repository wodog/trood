'use strict'

const express = require('express');
const router = express.Router();
const mapping = require('../common/mapping');
const config = require('../config');

router.get('/', (req, res, next) => {
	mapping.readMapping(config.mapping).then(data => {
		console.log(data);
		res.render('index', {data,data});
	});
});


module.exports = router;