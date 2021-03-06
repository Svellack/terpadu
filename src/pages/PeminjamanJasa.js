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

const currencies = [
  {
    value: 'none',
    label: '-x-',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function ValidationTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('none');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid style={{marginLeft:"65px"}} container item xs={5}>
          <h1 style={{marginTop:"40px"}}>Peminjaman Jasa</h1>
        </Grid>

        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Tipe Masalah</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
            id="outlined-select-currency-native"
            select
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            size="small"
            >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </TextField>
          </Grid>
        </Grid>
        
        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Identitas</Typography>
          </Grid>
          <Grid item xs={8}>
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
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Deskripsi Kegiatan</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              style={{ margin: 8 }}
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Lokasi</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
            id="outlined-select-currency-native"
            select
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            size="small"
            >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Ruangan</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
            id="outlined-select-currency-native"
            select
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            size="small"
            >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Waktu</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
            id="outlined-select-currency-native"
            select
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            variant="outlined"
            size="small"
            >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </TextField>
          </Grid>
        </Grid>
        
        <Grid container alignItems="center" item xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign:"left", paddingLeft:"15px"}}>Alat yang Dibutuhkan</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              style={{ margin: 8 }}
              size="small"
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
          </Grid><br/><br/>
        </div>
        </Grid>
      </Grid>
    </form>
  );
}

const PeminjamanJasa = () => {
  return (
    <div>
      <ValidationTextFields/>
    </div>
  )
}

export default PeminjamanJasa