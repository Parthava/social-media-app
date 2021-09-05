import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Button, Typography, Container, CssBaseline, TextField,
			CardHeader, CardMedia, Collapse, Avatar, IconButton  } from '@material-ui/core';
import Header from '../components/Header'
import useStyles from './OtherStyles'
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { createPost, listPosts } from '../actions/postActions';
import Alert from '@material-ui/lab/Alert';

const Feed = ({history}) => {

	const classes = useStyles();
	const [likePostId, setLikePostId] = useState()
	const [postInput, setPostInput] = useState()

	//console.log(likePostId)

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const {loading, error, userInfo} = userLogin

	let postMsg = "What's on your mind, User?"

	if(userInfo) {
		postMsg = "What's on your mind, " + userInfo.firstname + "?"
	}

	const postCreate = useSelector(state => state.postCreate)
	const {loading:postLoading, error:postError, post} = postCreate

	const postList = useSelector(state => state.postList)
	let {loading:getPostLoding, error:getPostError, posts} = postList

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(createPost(postInput))
		setPostInput('')
	}

	useEffect(() => {
		if(!userInfo) {
			history.push('/')
		}
		else {
			dispatch(listPosts())
		}
	}, [history, userInfo, post])


  return (
    <>
    <Header/>
	<Container component="main" maxWidth="xs" className={classes.top}>
      <CssBaseline />
      {postError && <Alert severity="error">{postError}</Alert>}<br/>
      {post && <Alert severity="success">Post added successfully</Alert>}<br/>
    	<Card className={classes.root}>
	      <CardContent>
	        <Typography className={classes.title} color="textSecondary" gutterBottom>
	          Share post to the world
	        </Typography>
	        <form className={classes.form} onSubmit={handleSubmit} noValidate>
		        <TextField
				  placeholder={postMsg}
				  multiline
				  fullWidth={true}
				  minRows={3}
				  value={postInput}
				  onChange={(event) => { setPostInput(event.target.value) }}
				  required
				/>
				<Button
	            type="submit"
	            className={classes.button}
	            variant="contained"
	            color="primary"
	            className={classes.submit}
	          >
	            Post
	          </Button>
	       </form>
	      </CardContent>
	    </Card>

	    {posts.map(post => (
	    	<Card className={classes.content} key={post._id}>
		      <CardHeader
		        avatar={
		          <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor: "#ff4d4d"}}>
		            {post.created_by_name.slice(0,1)}
		          </Avatar>
		        }
		        title={post.created_by_name}
		        subheader={post.updatedAt.slice(0,19)}
		      />
		      {/*<CardMedia
		        className={classes.media}
		        image="/static/images/cards/paella.jpg"
		        title="Paella dish"
		      />
	*/}	      <CardContent>
		        <Typography variant="body2" color="textSecondary" component="p">
		          {post.post}
		        </Typography>
		      </CardContent>
		      <CardActions disableSpacing>
		        <IconButton aria-label="add to favorites">
		          <FavoriteIcon onClick={() => { setLikePostId(post._id)}}/>
		        </IconButton>
		        <Typography variant="body2" color="textSecondary" component="p">
		          1
		        </Typography>
		      </CardActions>
		    </Card>

	    	))}

	</Container>
    </>
  );
}

export default Feed;
