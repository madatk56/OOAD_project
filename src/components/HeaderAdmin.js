import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';

/* import Logo from '../assets/Logo.png'; */

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();
  const [,, removeCookie] = useCookies('token');
  const handleLogout = async () => {
    await removeCookie('token');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {/* <img src={Logo} height='100' width='100'/> */}
           Find Job
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" to="/corp/post" className={classes.link}>
              Đăng tuyển
            </Link>
            <Link variant="button" color="textPrimary" to="#" className={classes.link}>
              Ngành
            </Link>
            <Link variant="button" color="textPrimary" to="#" className={classes.link}>
              Liên hệ
            </Link>
          </nav>

          <Link onClick={handleLogout} to='/' className={classes.link} >
            <Button  color="primary" variant="outlined" className={classes.link}>Đăng xuất</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

