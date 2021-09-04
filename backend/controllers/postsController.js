import asyncHandler from 'express-async-handler';
import Posts from '../models/postsModel.js'

// @desc    Create a post
// @route   POST /api/posts/create
// @access  Private

const createdPost = asyncHandler(async (req, res) => {
	
  const { post } = req.body
  console.log(post)

  const newPost = new Posts({
  	created_by: req.user._id,
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

export { createdPost }