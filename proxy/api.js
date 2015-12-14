'use strict'

const Api = require('../models').Api;
const debug = require('debug')('trood:proxy/api');

exports.getApis = () => {
    return new Promise((resolve, reject) => {
        Api.find((err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

exports.addApi = api_data => {
    return new Promise((resolve, reject) => {
        let api = new Api(api_data);
        api.save(err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};