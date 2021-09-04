import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Container, CssBaseline, TextField,
			CardHeader, CardMedia, Collapse, Avatar, IconButton, Grid  } from '@material-ui/core';
import Header from '../components/Header'
import useStyles from './OtherStyles'
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const Friendreq = () => {

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
			          List of friend Request
			        </Typography><br/>
	            </Grid>

	            <Grid item>
	            	<Typography className={classes.title} color="textPrimary" gutterBottom>
			          <Link to='/suggestions'>See suggestions</Link>
			        </Typography><br/>
	            </Grid>
	          </Grid>

	         <CardHeader
		        avatar={
		          <Avatar aria-label="recipe" className={classes.avatar}>
		            J
		          </Avatar>
		        }
		        title="John Smith"
		        subheader="Joined in: September 14, 2016"
		      />
	        <Button
	            type="submit"
	            className={classes.button}
	            variant="contained"
	            color="primary"
	            className={classes.submit}
	            style={{marginRight: "20px"}}
	          >
	          Accept
	        </Button>

	        <Button
	            type="submit"
	            className={classes.button}
	            variant="contained"
	            color="secondary"
	            className={classes.submit}
	          >
	          Reject
	        </Button>
	      </CardContent>
	    </Card>

	</Container>
    </>
  );
}

export default Friendreq;
