'use strict'

/**
 * module dependencies
 */
const express = require('express');
const router = express.Router();
const debug = require('debug')('trood:routes/api');
const config = require('../config');
//const mapping = require('../common/mapping');
const math = require('../controllers/math');
const user = require('../controllers/user');
const api = require('../controllers/api');

//mapping.readMapping(config.mapping);

/**
 * math route
 */
router.get('/math', math.index);
router.get('/math/add', math.add);
router.get('/math/minus', math.minus);

/**
 * user route
 */
router.get('/user', user.index);
router.get('/user/id/:id', user.getUserById);
router.get('/user/name/:name', user.getUserByName);
router.get('/user/add', user.addUser);

/**
 * api route
 */
router.get('/', api.getApis);
router.get('/add', api.addApi);
router.get('/delete', api.removeApi);

/**
 * exports
 */
module.exports = router;
