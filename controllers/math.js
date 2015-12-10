'use strict'

const debug = require('debug')('trood:controllers/math');

/**
 * math's index
 */
exports.index = (req, res, next) => {
	res.send('this is api for math');
}

/**
 * math's add 
 */
exports.add = (req, res, next) => {
	debug('queryString is: ', req.query);
	let result = 0;
	let query = req.query;
	for (let i in query) {
		result += parseInt(query[i], 10);
	}
	res.json({result:result});
};

/**
 * math's minus
 */
exports.minus = (req, res, next) => {
	debug('queryString is: ', req.query);
	let result = 0;
	let query = req.query;
	let flag = true;
	for (let i in query) {
		if(flag){
			result = parseInt(query[i], 10); 
			flag =false;
		} else {
			result -= parseInt(query[i], 10);		
		}
	}
	res.json({result:result});
};
