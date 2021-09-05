import asyncHandler from 'express-async-handler';
import Posts from '../models/postsModel.js'
import User from '../models/userModel.js'

// @desc    Create a post
// @route   POST /api/posts/create
// @access  Private

const createdPost = asyncHandler(async (req, res) => {
	
  const { post } = req.body

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

const getPosts = asyncHandler(async (req, res) => {

  // const user = await User.findById(req.user._id)

  // if(user.friendlist.length <= 0) {
  // 	const posts = await Posts.find({})
  // 	const data = posts.filter(post => {
  // 		if(post.created_by.equals(req.user._id)) {
  // 			return post
  // 		}
  // 	})
  // 	res.status(200).send(data)
  // }

  
})


export { createdPost }