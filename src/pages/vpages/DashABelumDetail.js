import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import TextField from '@material-ui/core/TextField';
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
    backgroundColor: "lightyellow",
    border: "solid #BEE4B4 1px",
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

const DashABelumDetail = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
          <Grid container justifyContent="flex-start" item xs={11}>
            <Link to="/dashABelumD">
            <br/>
            <IconButton>
              <KeyboardBackspaceIcon fontSize="large"/>
            </IconButton>
            </Link>
          </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper} square>
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
    <StyledDashAdmin className={classes.root}>
      <Grid container>
          <FormRow />
          <form className={classes1.root} noValidate autoComplete="off">
            <Grid container>
            <Grid container justifyContent="space-around" item xs={4}>
              <br/><br/><br/>
            </Grid>
           
            <Grid container alignItems="center" item xs={12}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Identitas Peminjam</Typography>
              </Grid>
              <Grid item xs={8}>
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
              <Grid item xs={1}>
                <IconButton><EditIcon></EditIcon></IconButton>
              </Grid>
            </Grid>

            <Grid container alignItems="center" item xs={12}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Tujuan Peminjaman</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  disabled
                  rows={4}
                  variant="filled"
                  style={{ margin: 8 }}
                  size="small"
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton><EditIcon></EditIcon></IconButton>
              </Grid>
            </Grid>

            <Grid container alignItems="center" item xs={12}>
              <Grid item xs={1}>
              </Grid>
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
              <Grid item xs={1}>
              </Grid>
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
              <Grid item xs={1}>
              </Grid>
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
              {/* 
              button kesalahan munculin button edit di kanan Nama sama Tujuan (admin nambahin catetan alasan salah)
                    sama button "Kesalahan" jadi "Cancel", button "Proses" jadi "Selesai" &  ganti Link to /dashAAdaK (dashboard ada kesalahan)
                      terus kalo button edit dipencet berarti ganti diTextfield "variant" jadi outlined terus "disabled" jadi error  
              */}
              
              <Link style={{textDecoration:'none'}} to="">
                <Button size="small" variant="contained" style={{backgroundColor:"yellow"}}>
                  Kesalahan 
                </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to="">
                <Button size="small" variant="contained" style={{backgroundColor:"indianred"}}>
                  Cancel 
                </Button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link style={{textDecoration:'none'}} to="/dashASedangD">
                <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
                  Selesai
                </Button>
              </Link>
              <Link style={{textDecoration:'none'}} to="/dashASedangD">
                <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
                  Proses
                </Button>
              </Link><br/><br/>
            </div>
            </Grid>

            </Grid>
          </form>
      </Grid>
    </StyledDashAdmin>
  );
}

const StyledDashAdmin = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default DashABelumDetail