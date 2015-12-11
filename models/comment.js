'use strict'


/**
 * module dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * define comment schema
 */
let CommentSchema = new Schema({
	topic_id: {type: ObjectId, required: true},
	user: {
		name: {type: String, required: true},
		email: {type: String, required: true}	
	},
	content: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

/**
 * define comment index
 */
CommentSchema.index({topic_id: 1, updated_at: 1});

/**
 * exports
 */
module.exports = mongoose.model('Comment', CommentSchema);
