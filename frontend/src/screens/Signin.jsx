import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,
			Checkbox, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import useStyles from './BasicStyles'
import { login } from '../actions/userActions';

const Signin = ({history}) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const classes = useStyles();

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const {loading, error, userInfo} = userLogin

	useEffect(() => {
		if(userInfo) {
			history.push('/feed')
		}
	}, [history, userInfo])

	const submitHandler = (event) => {
		//console.log(email, password)
		event.preventDefault()
		dispatch(login(email, password))
	}

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
	          Sign in
	        </Typography>
	        <form className={classes.form} onSubmit={submitHandler} noValidate>
	          <TextField
	            variant="outlined"
	            margin="normal"
	            required
	            fullWidth
	            id="email"
	            label="Email Address"
	            name="email"
	            value={email}
	            onChange={(event) => { setEmail(event.target.value) }}
	            autoComplete="email"
	            autoFocus
	            required
	          />
	          <TextField
	            variant="outlined"
	            margin="normal"
	            required
	            fullWidth
	            name="password"
	            value={password}
	            onChange={(event) => { setPassword(event.target.value) }}
	            label="Password"
	            type="password"
	            id="password"
	            autoComplete="current-password"
	            required
	          />
	          <Button
	            type="submit"
	            fullWidth
	            variant="contained"
	            color="primary"
	            className={classes.submit}
	          >
	            Sign In
	          </Button>
	          <Grid container>
	            <Grid item>
	            	{"Don't have an account? "} 
	              	<Link to="/signup">Sign up</Link>
	            </Grid>
	          </Grid>
	        </form>
	      </div>
	    </Container>
    </>
  );
}

export default Signin;
