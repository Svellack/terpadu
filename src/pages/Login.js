import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Button, makeStyles} from '@material-ui/core';

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
    
      <Grid alignItems="center" container>
      <Grid item xs={12}>
        <h1 style={{marginTop:"40px"}}>Login</h1>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <form className={classes.root} noValidate autoComplete="off">
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
              placeholder='Username'
            /></form>
          </Grid>
        </Grid>
      
      <Grid container item xs={12}>
      <Grid item xs={4}></Grid>
          <Grid item xs={4}>
          <form className={classes.root} noValidate autoComplete="off">
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
            </form>
          </Grid>
      </Grid>

      <Grid justifyContent="center" container item xs={12}>
        <div>
        <Link style={{textDecoration:'none'}} to="/dashboard">
          <Button variant="contained" size="small">
            Login
          </Button>
        </Link>
        <br/></div>
      </Grid>

      <Link style={{marginLeft:"10px"}} to="/dashAdmin">
          <Button size="small">
            Admin?
          </Button>
      </Link><br/><br/>
      </Grid>
    
  );
}

const Login = () => {
  return (
    <Box style={{
      backgroundColor:"lightgrey",
      height:"40vh",
      maxHeight:"60vh",
      paddingTop:"30vh",
      paddingBottom:"30vh",
      paddingRight:"60vh",
      paddingLeft:"60vh"}}>
        <Grid style={{backgroundColor:"white"}}>
          <ValidationTextFields/>
        </Grid>
    </Box>
  )
}

export default Login