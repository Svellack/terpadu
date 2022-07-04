import React from 'react'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
//import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid'
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
}));
  
const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
})(MuiAccordionSummary);

const NavbarAdmin = ({handleNavToggle}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
        <div>
            <StyledMenu>
                {/* <CloseToggle onClick={handleNavToggle} /> */}
            </StyledMenu>
        </div>
        <StyledLink to="/dashAdmin">
            <Accordion square>
                <AccordionSummary>
                    <Typography style={{textAlign:"left"}}>Dashboard</Typography>
                </AccordionSummary>
            </Accordion>
        </StyledLink>
        <Accordion square>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ArrowRightIcon/>
                <Typography style={{textAlign:"left"}}>Kategori</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.root}>
                    <List>
                    {['/dashABelumD','/dashASedangD', '/dashAAdaK', '/dashADibatalkan', '/dashASuratDicetak', '/dashASuratDiambil'].map((link,a) => (
                    <div>
                    {['Belum Diproses','Sedang Diproses', 'Ada Kesalahan', 'Dibatalkan', 'Surat Dicetak', 'Surat Diambil'].map((text,b) => (
                        <div>
                        {['#BEE4B4','#57787C', '#FEE45E', '#FF3939', '#83EE69', '#227A2B'].map((warna,c) => (
                            <div>
                            {(a===b)&&(a===c)&&(b===c) ? 
                                <div>
                                <Link to={link}>
                                <ListItem xs={12}>
                                
                                    <ListItemText primary={text}></ListItemText>
  
                                </ListItem>
                                </Link>
                                </div>
                                : null
                            }
                            </div>
                        ))}
                        </div>
                    ))}
                    </div>
                    ))}
                    </List>
                </div>
            </AccordionDetails>
        </Accordion>

        <StyledLink to="/">
            <Accordion square>
                <AccordionSummary>
                    <Typography style={{textAlign:"left"}}>Keluar</Typography>
                </AccordionSummary>
            </Accordion>
        </StyledLink>
        </Grid>
  )
}  
  const StyledMenu = styled.div`
      display: flex;
      flex-direction: column;
  `;
  const StyledLink = styled(Link)`

`;
//   const CloseToggle = styled(CloseIcon)`
//       position: fixed;
//       bottom: 5%;
//       right: 4%;
//       background: #222;
//       color: #fff;
//       padding: .75rem;
//       display: flex;
//       place-items: center;
//       font-size: 2rem;
//       cursor: pointer;
//   `;

export default NavbarAdmin