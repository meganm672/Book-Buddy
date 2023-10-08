/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single 
page application. You may consider conditionally rendering some options - 
for example 'Login' should be available if someone has not logged in yet. */
import React from 'react';

//import Link as RouterLink for mui 
import { Link as RouterLink} from 'react-router-dom'
//import the booklogo
import bookLogo from '../assets/books.png'
import { useSelector } from 'react-redux'
//import the mui components
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import use slectro to get token and do token && login and account 
const Navigations= () =>{
  const token = useSelector(state => state.token);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img id='logo-image' src={bookLogo}/> Library App
          </Typography>
          
          {!token && <Button color="inherit" component={RouterLink} to="/login">Login</Button>}
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to="/books">Home</MenuItem>
        {token && <MenuItem onClick={handleClose} component={RouterLink} to="/account">Account</MenuItem>}
      </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navigations