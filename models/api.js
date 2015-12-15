'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ApiSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    desc: {type: String, required: true},
    req: {type:Object}
});

ApiSchema.index({name: 1});

module.exports = mongoose.model('Api', ApiSchema);