import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Container, CssBaseline, TextField,
			CardHeader, CardMedia, Collapse, Avatar, IconButton, Grid  } from '@material-ui/core';
import Header from '../components/Header'
import useStyles from './OtherStyles'
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const Suggestions = () => {

	const classes = useStyles();

  return (
    <>
    <Header/>
	<Container component="main" maxWidth="xs" className={classes.top}>
      <CssBaseline />
    	<Card className={classes.root}>
	      <CardContent>
	      
	        <Grid container>
	            <Grid item>
	            	<Typography style={{marginRight: "20px"}} className={classes.title} color="textPrimary" gutterBottom>
			          People whom you may know
			        </Typography><br/>
	            </Grid>

	            <Grid item>
	            	<Typography className={classes.title} color="textPrimary" gutterBottom>
			          <Link to='/friendreq'>See Friend Request</Link>
			        </Typography><br/>
	            </Grid>
	          </Grid>

	         <CardHeader
		        avatar={
		          <Avatar aria-label="recipe" className={classes.avatar}>
		            A
		          </Avatar>
		        }
		        title="Alice Johnson"
		        subheader="Joined in: September 24, 2016"
		      />
	        <Button
	            type="submit"
	            className={classes.button}
	            variant="contained"
	            color="primary"
	            className={classes.submit}
	            style={{marginRight: "20px"}}
	          >
	          Send
	        </Button>
	      </CardContent>
	    </Card>

	</Container>
    </>
  );
}

export default Suggestions;
