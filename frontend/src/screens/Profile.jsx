import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,
			Checkbox, Grid, Box, Typography, Container } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import useStyles from './BasicStyles'
import Alert from '@material-ui/lab/Alert';
import { updateProfile } from '../actions/userActions';
import Header from '../components/Header'

const Profile = ({history}) => {

	const classes = useStyles();

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const {loading, error, userInfo} = userLogin

	const profileUpdate = useSelector(state => state.profileUpdate)
	const {loading:profileLoading, error:profileError, updatedProfile} = profileUpdate

	const [firstname, setFirstname] = useState(userInfo.firstname)
	const [lastname, setLastName] = useState(userInfo.lastname)

	useEffect(() => {
		if(!userInfo) {
			history.push('/')
		}
	}, [history, userInfo])

	const submitHandler = (event) => {
		//console.log(email, password)
		event.preventDefault()
		dispatch(updateProfile(firstname, lastname))
	}

  return (
    <>
    	<Header/>
    	<Container component="main" maxWidth="xs">
	      <CssBaseline />
	      <div className={classes.paper}>
	      	<Typography component="h1" variant="h5" style={{color: "red"}}>
	          Update profile
	        </Typography>
	        <Avatar className={classes.avatar}>
	         <AccountCircleIcon/>
	        </Avatar>
	        <Typography component="h1" variant="h5">
	          {profileError && <Alert severity="error">{profileError}</Alert>}
	          {updatedProfile && <Alert severity="success">Profile updated successfully! Logout and login agian to view changes</Alert>}
	        </Typography>
	        <form className={classes.form} onSubmit={submitHandler} noValidate>
	          <TextField
	            variant="outlined"
	            margin="normal"
	            required
	            fullWidth
	            id="firstname"
	            name="email"
	            value={firstname}
	            onChange={(event) => { setFirstname(event.target.value) }}
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
	            value={lastname}
	            onChange={(event) => { setLastName(event.target.value) }}
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
	            Update
	          </Button>
	        </form>
	      </div>
	    </Container>
    </>
  );
}

export default Profile;
