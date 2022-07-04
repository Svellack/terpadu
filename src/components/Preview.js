import React from 'react'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import lihat from './lihat.png'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles1 = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));


const Preview = () => {
    const classes1 = useStyles1();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
    <div>
        <Link style={{textDecoration:'none'}} to="">
          <Button size="small" variant="contained" style={{backgroundColor:"honeydew"}} onClick={handleToggle}>
            Preview 
          </Button>
        </Link>
        <Backdrop className={classes1.backdrop} open={open} onClick={handleClose}>
        <img src={lihat} style={{maxHeight:"90vh"}} alt='re'></img>
        </Backdrop>
    </div>
  )
}

export default Preview