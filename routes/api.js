'use strict'

/**
 * module dependencies
 */
const express = require('express');
const router = express.Router();
const debug = require('debug')('trood:routes/api');
const config = require('../config');
const result = require('../common/result');
const user = require('../proxy/user');
const api = require('../proxy/api');


router.get('/aaaaaaaa', (req, res, next)=> {
});


/**
 * math route
 */
router.get('/math', (req, res, next) => {
    res.send('this is api for math');
});
router.get('/math/add', (req, res, next) => {
    debug('queryString is: ', req.query);
    let result = 0;
    let query = req.query;
    for (let i in query) {
        result += parseInt(query[i], 10);
    }
    res.json({result: result});
});
router.get('/math/minus', (req, res, next) => {
    debug('queryString is: ', req.query);
    let result = 0;
    let query = req.query;
    let flag = true;
    for (let i in query) {
        if (flag) {
            result = parseInt(query[i], 10);
            flag = false;
        } else {
            result -= parseInt(query[i], 10);
        }
    }
    res.json({result: result});
});

/**
 * user route
 */
router.get('/user', (req, res, next) => {
    res.send('this is user api');
});
router.get('/user/id/:id', (req, res, next) => {
    debug('params: ', req.params);
    user.getUserById(req.params.id).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});
router.get('/user/name/:name', (req, res, next) => {
    debug('params: ', req.params);
    user.getUserByName(req.params.name).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});
router.get('/user/add', (req, res, next) => {
    debug('query: ', req.query);
    user.addUser(req.query).then((data) => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});

/**
 * api route
 */
router.get('/', (req, res, next) => {
    //debug(req.query);
    if (req.query.id) {
        debug(req.query.id);
        api.getApiById(req.query.id).then(data => {
            debug(req.query);
            res.json(new result(true, data));
        }).catch(err => {
            res.json(new result(false, err));
        });
    } else {
        api.getApis().then(data => {
            res.json(new result(true, data));
        }).catch(err => {
            res.json(new result(false, err));
        });
    }

});
router.get('/add', (req, res, next) => {
    debug('addApi:query: ', req.query);
    api.addApi(req.query).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});
router.get('/delete', (req, res, next) => {
    debug('remnoveApi:query: ', req.query);
    api.removeApi(req.query).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});
router.post('/update', (req, res, next) => {
    debug('updateApi:query', req.query);
    debug('updateApi:body', req.body);
    api.updateApi(req.query.id, req.body).then(data => {
        res.json(new result(true, data));
    }).catch(err => {
        res.json(new result(false, err));
    });
});

/**
 * exports
 */
module.exports = router;
