'use strict'

const api = require('../proxy/api');
const result = require('../common/result');
const debug = require('debug')('trood:controller/api');

/**
 * get all apis
 * @param req
 * @param res
 * @param next
 */
exports.getApis = (req, res, next) => {
    api.getApis().then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    })
}

/**
 * add one api
 * @param req
 * @param res
 * @param next
 */
exports.addApi = (req, res, next) => {
    debug('addApi/query: ', req.query);
    api.addApi(req.query).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
}