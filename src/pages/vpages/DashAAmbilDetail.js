import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

import lihat from './lihat.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundColor: "lightyellow",
    border: "solid #227A2B 1px",
    height:"12vw"
  },
}));

const useStyles1 = makeStyles({
  root: {
    maxWidth: "inherit",
    minHeight: "50vw",
    padding:"40px",
  },
  edit:{
    textAlign:"left"
  },
  media: {
    height: 1100,
    textAlign: "center"
  },
});

const DashAAmbilDetail = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
        <Grid container justifyContent="flex-start" item xs={11}>
          <Link to="/dashASuratDiambil"><br/>
            <IconButton>
              <KeyboardBackspaceIcon fontSize="large"/>
            </IconButton>
          </Link>
        </Grid>

        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper} square>
              <ListItemText style={{marginLeft:"20px"}}>
                <ListItemText primary="Layanan"></ListItemText> 
                <ListItemText primary="Pengaju"></ListItemText>  
                <ListItemText primary="Waktu Pengajuan"></ListItemText> 
                <ListItemText primary="Waktu Pemrosesan"></ListItemText> 
                <ListItemText primary="Waktu Dicetak"></ListItemText>
                <ListItemText primary="Waktu Pengambilan"></ListItemText> 
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
      <FormRow />
      <Grid item xs={12}><br/>
        <Card className={classes1.root}>
          <CardContent className={classes1.edit}>
            <CardMedia
            className={classes1.media}
            image={lihat}
            title="Contemplative Reptile"
          />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DashAAmbilDetail