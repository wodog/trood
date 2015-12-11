'use strict'

/**
 * module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * define user schema
 */
let UserSchema = new Schema({
	name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
	gender: {type: String, required: true},
	signature: {type: String},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

/**
 * define user index
 */
UserSchema.index({name: 1});

/**
 * exports
 */
module.exports = mongoose.model('User', UserSchema);

