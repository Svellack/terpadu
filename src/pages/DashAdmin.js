import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DashAdmin = () => {
  const classes = useStyles();
  function FormRow() {
    return (
      <Grid container direction='row' justifyContent="space-around" alignItems="center" item xs={12} spacing={2}>
        <React.Fragment>
          <Grid item xs={4}>
            {['/dashABelumD', '/dashAAdaK', '/dashASuratDicetak'].map((link,a) => (
            <div>
              {['Belum Diproses', 'Ada Kesalahan', 'Surat Dicetak'].map((text,b) => (
              <div>
                {['aliceblue', '#FEE45E', '#83EE69'].map((warna,c) => (
                <div>
                  {(a===b)&&(a===c)&&(b===c) ? 
                  <div>
                    <Grid item xs={12}>
                      <br/><br/>
                      <Paper style={{backgroundColor:[warna], height:"10vw"}} square><br/>
                        <ListItemText primary={text}></ListItemText><br/>
                        <ListItemText primary={a}></ListItemText>
                      </Paper>

                      <Link to ={link}>
                        <Paper style={{backgroundColor:[warna]}} square>
                          <hr style={{margin:"0px 10px 0px", height:"0.1px"}}></hr>
                          <Button>Buka</Button>
                        </Paper>
                      </Link>
                    </Grid><br/>
                  </div>
                  : null
                  }
                </div>
                ))}
              </div>
              ))}
            </div>
            ))}
          </Grid>

          <Grid item xs={4}>
            {['/dashASedangD', '/dashADibatalkan', '/dashASuratDiambil'].map((link,a) => (
            <div>
              {['Sedang Diproses', 'Dibatalkan', 'Surat Diambil'].map((text,b) => (
              <div>
                {['#57787C', '#FF3939', '#227A2B'].map((warna,c) => (
                <div>
                  {(a===b)&&(a===c)&&(b===c) ? 
                  <div>
                    <Grid item xs={12}>
                      <br/><br/>
                      <Paper style={{backgroundColor:[warna], height:"10vw"}} square><br/>
                        <ListItemText primary={text}></ListItemText><br/>
                        <ListItemText primary={a}></ListItemText>
                      </Paper>
                      
                      <Link to ={link}>
                        <Paper style={{backgroundColor:[warna]}} square>
                          <hr style={{margin:"0px 10px 0px", height:"0.1px"}}></hr>
                          <Button>Buka</Button>
                        </Paper>
                      </Link>
                    </Grid><br/>
                  </div>
                  : null
                  }
                </div>
                ))}
              </div>
              ))}
            </div>
            ))}
          </Grid>
        </React.Fragment>
      </Grid>
    );
  }
  
  return (
    <div className={classes.root}>
      <Grid container>
        <FormRow/>
      </Grid>
    </div>
  );
}

export default DashAdmin