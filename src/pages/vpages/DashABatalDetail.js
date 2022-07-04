import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: "lightyellow",
    border: "solid #FF3939 1px",
    height:"10vw"
  },
}));

const DashABatalDetail = () => {
  const classes = useStyles();
  function FormRow() {
    return (
    <Grid container direction='row' justifyContent="center" alignItems="center" item xs={12}>
      <React.Fragment>
          <Grid container justifyContent="flex-start" item xs={11}>
            <Link to="/dashADibatalkan">
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
                <ListItemText primary="Waktu Pemrosesan"></ListItemText> 
                <ListItemText primary="Waktu Pembatalan"></ListItemText> 
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

export default DashABatalDetail