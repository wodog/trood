'use strict'

const fs = require('fs');
const path = require('path');
const debug = require('debug')('trood:common/mapping');

// let mapping_path = path.join(__dirname, '..', 'mapping.txt');

exports.readMapping = m_path => {
	return readFile(m_path).then(data => {
		let result = [];
		let sentence = data.split('\n');
		debug('sentence: ',sentence);
		sentence.forEach(item => {
			if (item) {

				debug(item);
				let column = item.split('||');
				let obj = {
					name: column[0].trim(),
			desc: column[1].trim(),
			impl: column[2].trim()
				}
				debug(obj);
				result.push(obj);
			}
		});
		console.log(result);
		return result;
	});
};

function readFile(m_path) {
	return new Promise((resolve, reject) => {
		fs.readFile(m_path, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data.toString());
		});
	});
} 
