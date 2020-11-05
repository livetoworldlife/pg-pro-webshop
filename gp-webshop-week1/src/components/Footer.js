import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/livetoworldlife">
        livetoworldlife
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'rgb(255, 133, 133)',
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          webshop
</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Buy online what you want !!!
</Typography>
        <Copyright />
      </footer>
    </React.Fragment>

  )
}
