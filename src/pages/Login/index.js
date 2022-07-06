import {
  Container,
  Grid,
  Paper,
  Box,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  loginContainer: {
    marginTop: '10vh',
  },
  loginPaper: {
    padding: 20,
  },
  loginBox: {
    height: 350,
  },
  loginForm: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: '#03581F',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const submitLogin = async (username, password) => {
    const response = await axios.post(process.env.REACT_APP_USER_LOGIN_API, {
      username: username,
      password: password,
    });
    console.log(response.data);
  };

  return (
    <Container className={classes.loginContainer}>
      <Grid container spacing={2}>
        <Grid item sm={4} />
        <Grid item sm={4}>
          <Box className={classes.loginBox}>
            <Paper className={classes.loginPaper} elevation={1}>
              <h1>Login</h1>
              <form>
                <TextField
                  className={classes.loginForm}
                  size="small"
                  name="username"
                  placeholder="Username"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  name="password"
                  size="small"
                  placeholder="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className={classes.loginButton}
                  variant="contained"
                  onClick={() => submitLogin(username, password)}
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={4} />
      </Grid>
    </Container>
  );
};

export default Login;
