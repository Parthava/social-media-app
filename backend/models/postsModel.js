import mongoose from 'mongoose'

const likesSchema = mongoose.Schema({
	user_id: {
		type: Number,
		required: true
	}
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const postSchema = mongoose.Schema({
	post: {
		type: String,
		required: true
	}
	likes: [likesSchema],
}, {
	timestamps: true
})

const Posts = mongoose.model('Posts', postSchema)

export default Posts;