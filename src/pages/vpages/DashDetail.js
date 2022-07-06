import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Box, IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import lihat from './lihat.png'

const useStyles = makeStyles({
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

const DashDetail = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Card className={classes.root}>
          <CardContent className={classes.edit}>
            <Link to="/dashboard">
              <IconButton>
                <KeyboardBackspaceIcon fontSize="large"/>
              </IconButton>
            </Link>
            <CardMedia
              className={classes.media}
              image={lihat}
              title="Contemplative Reptile"
            />
          </CardContent>
      </Card>
    </Box>
  );
}

export default DashDetail