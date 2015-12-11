'use strict'

/**
 * module dependencies
 */
const debug = require('debug')('trood:proxy/user');
const User = require('../models').User;

/**
 * add user
 * @param data
 * @returns {data}
 */
exports.addUser = data => {
    return new Promise((resolve, reject) => {
        let user = new User(data);
        user.save(err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    })
};

/**
 * get user by id
 * @param id
 * @returns {Promise|Array|{index: number, input: string}}
 */
exports.getUserById = id => {
    return new Promise((resolve, reject) => {
        User.findOne({_id: id}, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

/**
 * get user by name
 * @param name
 * @returns {Promise}
 */
exports.getUserByName = name => {
    return new Promise((resolve, reject) => {
        User.findOne({name: name}, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
