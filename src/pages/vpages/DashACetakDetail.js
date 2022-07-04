import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton } from '@material-ui/core';
import lihat from './lihat.png'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundColor: "lightyellow",
    border: "solid #83EE69 1px",
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

const DashACetakDetail = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
          <Grid container justifyContent="flex-start" item xs={11}>
            <Link to="/dashASuratDicetak">
            <br/>
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
          <Grid item xs={12}>
                <br/>
            <Card className={classes1.root}>
                <CardContent className={classes1.edit}>
                  <CardMedia
                  className={classes1.media}
                  image={lihat}
                  title="Contemplative Reptile"
                />
                </CardContent>
                <Link style={{textDecoration:'none'}} to="/dashASuratDiambil">
                <Button size="small" variant="contained" style={{backgroundColor:"lightgreen"}}>
                  Selesai
                </Button>
                </Link>
            </Card>
          </Grid>
          
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

export default DashACetakDetail