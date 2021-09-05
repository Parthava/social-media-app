import mongoose from 'mongoose'

const likesSchema = mongoose.Schema({
	liked_by: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const postSchema = mongoose.Schema({
	created_by_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	created_by_name: {
		type: String,
		required: true
	},
	post: {
		type: String,
		required: true
	},
	likes: [likesSchema]
}, {
	timestamps: true
})

const Posts = mongoose.model('Posts', postSchema)

export default Posts;