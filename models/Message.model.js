const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	origin: {
		type: Schema.Types.ObjectId,
		ref: 'Pet',
		required: true,
	},

	destinatary: {
		type: Schema.Types.ObjectId,
		ref: 'Pet',
		required: true,
	},

	origin: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		required: true,
	},
});

const User = model('User', userSchema);

module.exports = User;