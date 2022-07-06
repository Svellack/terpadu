import React from 'react';
import { Link } from 'react-router-dom';
import Preview from '../components/Preview';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <Grid container justifyContent="space-around" item xs={4}>
          <h1 style={{marginTop:"40px"}}>Transkrip Nilai</h1>
        </Grid>

        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Nama Lengkap</Typography>
          </Grid>
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
            />
          </Grid>
        </Grid>
        
        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>NIM</Typography>
          </Grid>
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
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
        <div><br/>
          <Grid container justifyContent="center">
            <Preview/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{textDecoration:'none'}} to="/dashboard">
              <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
                Submit 
              </Button>
            </Link>
          </Grid>
          <br/><br/>
        </div>
        </Grid>
      </Grid>
    </form>
  );
}

const TranskripNilai = () => {
  return (
    <div>
      <ValidationTextFields/>
    </div>
  )
}

export default TranskripNilai