import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './HeaderStyles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from "react-router-dom";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { logout } from '../actions/userActions';


const Header = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to='/profile' style={{textDecoration: "None"}}> Profile </Link></MenuItem>
      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <>
    	<div className={classes.grow}>
	      <AppBar position="static">
	        <Toolbar>
	          <IconButton>
	            <RecordVoiceOverIcon className={classes.icon}/>
	          </IconButton>
            <Link to="/feed" className={classes.brand}>
  	          <Typography className={classes.title} variant="h6" noWrap>
  	            SocialMedia
  	          </Typography>
            </Link>
	          <div className={classes.grow} />
	          <div className={classes.sectionDesktop}>
            <Link to='/friendreq' style={{color: "white"}}>
	            <IconButton aria-label="show 4 new friend request" color="inherit">
	              <Badge badgeContent={4} color="secondary">
	                <PeopleIcon />
	              </Badge>
	            </IconButton>
            </Link>
	            <IconButton aria-label="show 17 new notifications" color="inherit">
	              <Badge badgeContent={17} color="secondary">
	                <NotificationsIcon />
	              </Badge>
	            </IconButton>
	            <IconButton
	              edge="end"
	              aria-label="account of current user"
	              aria-controls={menuId}
	              aria-haspopup="true"
	              onClick={handleProfileMenuOpen}
	              color="inherit"
	            >
	              <AccountCircle />
	            </IconButton>
	          </div>
	          <div className={classes.sectionMobile}>
	            <IconButton
	              aria-label="show more"
	              aria-controls={mobileMenuId}
	              aria-haspopup="true"
	              onClick={handleMobileMenuOpen}
	              color="inherit"
	            >
	              <MoreIcon />
	            </IconButton>
	          </div>
	        </Toolbar>
	      </AppBar>
	      {renderMobileMenu}
	      {renderMenu}
	    </div>
    </>
  );
}

export default Header;
