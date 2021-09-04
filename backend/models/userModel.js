import mongoose from 'mongoose'

const friendReqSchema = mongoose.Schema({
	user_id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const friendListSchema = mongoose.Schema({
	user_id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	hashPassword: {
		type: String,
		required: true
	},
	friendreq: [friendReqSchema],
	friendlist: [friendListSchema],
}, {
	timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;