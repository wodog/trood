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
};

/**
 * add one api
 * @param req
 * @param res
 * @param next
 */
exports.addApi = (req, res, next) => {
    debug('addApi:query: ', req.query);
    api.addApi(req.query).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
};

/**
 * remove one api
 * @param req
 * @param res
 * @param next
 */
exports.removeApi = (req, res, next) => {
    debug('remnoveApi:query: ', req.query);
    api.removeApi(req.query).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
};

/**
 * update one api
 * @param req
 * @param res
 * @param next
 */
exports.updateApi = (req, res, next) => {
    debug('updateApi:query', req.query);
    debug('updateApi:body', req.body);
    api.updateApi(req.query.id, req.body).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
}
