import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
}));


export default function MainNavigation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color='secondary' position="sticky">
        <Toolbar>
          <ShoppingCart className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            webshop
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment >
  )
};
