import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Container, CssBaseline, TextField,
			CardHeader, CardMedia, Collapse, Avatar, IconButton  } from '@material-ui/core';
import Header from '../components/Header'
import useStyles from './OtherStyles'
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Feed = () => {

	const classes = useStyles();
	const [like, setLike] = useState(false)

	const handleSubmit = () => {
		alert("Click!!")
	}


  return (
    <>
    <Header/>
	<Container component="main" maxWidth="xs" className={classes.top}>
      <CssBaseline />
    	<Card className={classes.root}>
	      <CardContent>
	        <Typography className={classes.title} color="textSecondary" gutterBottom>
	          Share post to the world
	        </Typography>
	        <form className={classes.form} onSubmit={handleSubmit} noValidate>
		        <TextField
				  placeholder="What's on your mind, User?"
				  multiline
				  fullWidth={true}
				  minRows={3}
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

	    <Card className={classes.content}>
	      <CardHeader
	        avatar={
	          <Avatar aria-label="recipe" className={classes.avatar}>
	            R
	          </Avatar>
	        }
	        title="Shrimp and Chorizo Paella"
	        subheader="September 14, 2016"
	      />
	      <CardMedia
	        className={classes.media}
	        image="/static/images/cards/paella.jpg"
	        title="Paella dish"
	      />
	      <CardContent>
	        <Typography variant="body2" color="textSecondary" component="p">
	          This impressive paella is a perfect party dish and a fun meal to cook together with your
	          guests. Add 1 cup of frozen peas along with the mussels, if you like.
	        </Typography>
	      </CardContent>
	      <CardActions disableSpacing>
	        <IconButton aria-label="add to favorites">
	          {like ? <FavoriteIcon style={{ color: "red" }} onClick={() => { setLike(false) }} /> : 
	          <FavoriteIcon onClick={() => { setLike(true) }} />}
	        </IconButton>
	        <Typography variant="body2" color="textSecondary" component="p">
	          1
	        </Typography>
	      </CardActions>
	    </Card>

	</Container>
    </>
  );
}

export default Feed;
