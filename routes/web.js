'use strict'

const express = require('express');
const router = express.Router();
//const mapping = require('../common/mapping');
const config = require('../config');
const api = require('../proxy/api');

/**
 * apis index
 */
router.get('/', (req, res, next) => {
    //mapping.readMapping(config.mapping).then(map_data => {
    //	res.render('index', {data: map_data, title: 'Api View'});
    //});
    api.getApis().then(data => {
       res.render('index', {data:data, title: 'Api View'});
    });

});


module.exports = router;
