import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
    border: "solid #57787C 1px",
    height:"10vw"
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

const DashASedangDetail = () => {
  const paperStyle = useStyles();
  const cardStyle = useStyles1();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
        <Grid container justifyContent="flex-start" item xs={11}>
          <Link to="/dashASedangD"><br/>
            <IconButton>
              <KeyboardBackspaceIcon fontSize="large"/>
            </IconButton>
          </Link>
        </Grid>

        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Paper className={paperStyle.paper} square>
              <ListItemText style={{marginLeft:"20px"}}>
                <ListItemText primary="Layanan"></ListItemText> 
                <ListItemText primary="Pengaju"></ListItemText>  
                <ListItemText primary="Waktu Pengajuan"></ListItemText> 
                <ListItemText primary="Waktu Pemrosesan"></ListItemText> 
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
        <Link style={{textDecoration:'none'}} to="">
          <Button size="small" variant="contained">
            <CloudUploadIcon/>
            &nbsp;&nbsp;Upload
          </Button>
        </Link>
        <Card className={cardStyle.root}>
          <CardContent className={cardStyle.edit}>
            <CardMedia
            className={cardStyle.media}
            image={lihat}
            title="Contemplative Reptile"
            />
          </CardContent>
          <Link style={{textDecoration:'none'}} to="/dashASuratDicetak">
            <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
              Selesai
            </Button>
          </Link>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DashASedangDetail