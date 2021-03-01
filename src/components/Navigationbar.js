import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to='/'> <Button color="inherit">Home</Button> </Link>
          <Link to='/Project'> <Button color="inherit">Project</Button> </Link>
          <Link to='/TasksAssigned'> <Button color="inherit">Tasks</Button> </Link>
          <Link to='/Model'> <Button color="inherit" >Model</Button> </Link>
          <Link to='/Analytics'> <Button color="inherit" >Analytics</Button> </Link>
          <div className={classes.title}></div>
          <Link to='/about'> <Button color="inherit">about</Button> </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}