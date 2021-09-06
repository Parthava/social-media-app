import asyncHandler from 'express-async-handler';
import Posts from '../models/postsModel.js'
import User from '../models/userModel.js'

// @desc    Create a post
// @route   POST /api/posts/create
// @access  Private

const createdPost = asyncHandler(async (req, res) => {
	
  const { post } = req.body

  const newPost = new Posts({
  	created_by_id: req.user._id,
    created_by_name: req.user.firstname,
    post: post
  })

  try {
  	const createdPost = await newPost.save()
  	res.status(201).json(createdPost)
  }
  catch (error) {
  	res.status(400)
	  throw new Error('Unable to create post')
  }
})

const getPosts = asyncHandler(async (req, res) => {

  const posts = await Posts.find({})

  res.status(200).send(posts)
})


export { createdPost, getPosts }