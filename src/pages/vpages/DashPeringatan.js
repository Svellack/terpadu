import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';

import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundColor:"#BEE4B4",
    height:"10vw"
  },
}));

const useStyles1 = makeStyles((theme) => ({
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

const DashPeringatan = () => {
  const paperStyle = useStyles();
  const formStyle = useStyles1();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
        <Grid container justifyContent="flex-start" item xs={11}>
          <Link to="/dashboard"><br/>
            <IconButton>
              <KeyboardBackspaceIcon fontSize="large"/>
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Paper className={paperStyle.paper} square>
              <ListItemText style={{marginLeft:"20px"}}>
                <ListItemText primary="Layanan"></ListItemText> 
                <ListItemText primary="Pengaju"></ListItemText>  
                <ListItemText primary="Waktu Pengajuan"></ListItemText> 
              </ListItemText>
            </Paper>
          </Grid>        
        </Grid>
      </React.Fragment>
    </Grid>
    );
  }
  
  return (
    <Grid container>
      <FormRow/>
      <form className={formStyle.root} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={12}><br/><h1>Kesalahan</h1></Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Identitas Peminjam</Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-full-width"
                style={{ margin: 8 }}
                fullWidth
                disabled
                margin="normal"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>
            {/* Mencet Edit baru keluar tergantung yg salah */}
            <Grid item xs={1}>
              <IconButton><EditIcon></EditIcon></IconButton>
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Tujuan Peminjaman</Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                disabled
                error
                rows={4}
                variant="filled"
                style={{ margin: 8 }}
                size="small"
              />
            </Grid>
            {/* Mencet Edit baru keluar tergantung yg salah */}
            <Grid item xs={1}>
              <IconButton><EditIcon></EditIcon></IconButton>
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Lokasi</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              disabled
              margin="normal"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Ruangan</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              disabled
              margin="normal"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Waktu</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              fullWidth
              disabled
              margin="normal"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
          <div><br/>
            <Link style={{textDecoration:'none'}} to="">
              <Button size="small" variant="contained" style={{backgroundColor:"#FEE45E"}}>
                Edit 
                {/* 
                    kalo button edit dipencet berarti ganti diTextfield "variant" jadi outlined terus "disabled" sama "error" diapus
                      sama button "Edit" jadi "Cancel", button "Submit" muncul
                */}
              </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{textDecoration:'none'}} to="/dashboard">
              <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
                Submit
              </Button>
            </Link><br/><br/>
          </div>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default DashPeringatan