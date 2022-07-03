import React from 'react'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function ValidationTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
      <Grid container justifyContent="center" item xs={12}>
        <h1 style={{marginTop:"40px"}}>Login</h1>
      </Grid>

      <Grid container alignItems="center" item xs={12}>
        <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              placeholder='NIM'
            />
          </Grid>
        </Grid>
      
      <Grid container alignItems="center" item xs={12}>
      <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              placeholder='Password'
            />
          </Grid>
      </Grid>

      <Grid item xs={12}>
      <div><br/>
        <Link to="/dashAdmin">
          <Button size="small" color="primary">
            Admin?
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button size="small" color="primary">
            Login
          </Button>
        </Link><br/><br/>
      </div>
      </Grid>

      </Grid>
    </form>
  );
}

const Login = () => {
  return (
    <Box style={{backgroundColor:"lightgrey", maxHeight:"100vh", paddingTop:"30vh", paddingBottom:"35vh"}}>
        <Grid style={{backgroundColor:"white"}}>
          <ValidationTextFields/>
        </Grid>
    </Box>
  )
}

export default Login