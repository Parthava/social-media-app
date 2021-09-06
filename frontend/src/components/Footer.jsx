import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {
  return (
    <>
    	<Typography variant="body2" color="textSecondary" align="center" style={{marginTop: "50px"}}>
	      {'Copyright © '}
	      <Link color="inherit" href="https://material-ui.com/">
	        SocialMedia
	      </Link>{'   '}
	      {new Date().getFullYear()}
	      <br/>
	      Created by: &lt;parthava.borah&#47;&gt;<br/><br/>
	    </Typography>
    </>
  );
}

export default Footer;
