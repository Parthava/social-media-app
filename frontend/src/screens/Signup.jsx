import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import useStyles from './BasicStyles'

const Signup = () => {

	const [firstname, setFirstName] = useState('')
	const [lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const classes = useStyles();

  return (
    <>
    	<Container component="main" maxWidth="xs">
	      <CssBaseline />
	      <div className={classes.paper}>
	      	<Typography component="h1" variant="h5" style={{color: "red"}}>
	          Welcome to SocialMedia
	        </Typography>
	        <Avatar className={classes.avatar}>
	         <LockOutlinedIcon/>
	        </Avatar>
	        <Typography component="h1" variant="h5">
	          Sign up
	        </Typography>
	        <form className={classes.form} onSubmit={submitHandler} noValidate>
	          <Grid container spacing={2}>
	            <Grid item xs={12} sm={6}>
	              <TextField
	                autoComplete="fname"
	                name="firstName"
	                value={firstname}
	            	onChange={(event) => { setFirstName(event.target.value) }}
	                variant="outlined"
	                required
	                fullWidth
	                id="firstName"
	                label="First Name"
	                autoFocus
	              />
	            </Grid>
	            <Grid item xs={12} sm={6}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                id="lastName"
	                label="Last Name"
	                name="lastName"
	                value={lastname}
	            	onChange={(event) => { setLastName(event.target.value) }}
	                autoComplete="lname"
	              />
	            </Grid>
	            <Grid item xs={12}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                id="email"
	                label="Email Address"
	                name="email"
	                value={email}
	            	onChange={(event) => { setEmail(event.target.value) }}
	                autoComplete="email"
	              />
	            </Grid>
	            <Grid item xs={12}>
	              <TextField
	                variant="outlined"
	                required
	                fullWidth
	                name="password"
	                value={password}
	            	onChange={(event) => { setPassword(event.target.value) }}
	                label="Password"
	                type="password"
	                id="password"
	                autoComplete="current-password"
	              />
	            </Grid>
	          </Grid>
	          <Button
	            type="submit"
	            fullWidth
	            variant="contained"
	            color="primary"
	            className={classes.submit}
	          >
	            Sign Up
	          </Button>
	          <Grid container justifyContent="flex-end">
	            <Grid item>
	            	{"Already have an account? "} 
	              	<Link to='/'>Sign in</Link>
	            </Grid>
	          </Grid>
	        </form>
	      </div>
	    </Container>
    </>
  );
}

export default Signup;
