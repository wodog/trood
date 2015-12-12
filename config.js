'use strict'

const path = require('path');

const config = {
	port: 3000,
	db: 'mongodb://121.42.62.149:32769/trood',
	mapping: path.join(__dirname, 'mapping.txt')
		
}

module.exports = config;
