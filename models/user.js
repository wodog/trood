'use strict'

/**
 * Module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: {type: String},
    loginname: {type: String},
    pass: {type: String},
    email: {type: String},
    profile_image_url: {type: String},
    location: {type: String},
    signature: {type: String},
    profile: {type: String},
    weibo: {type: String},
    level: {type: String},
    is_block: {type: Boolean, default: false},
    active: {type: Boolean, default: false},
});

UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});

module.exports = mongoose.model('User', UserSchema);

