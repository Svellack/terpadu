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

const Navbar = ({handleNavToggle}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
        <div>
            <StyledMenu>
                {/* <CloseToggle onClick={handleNavToggle} /> */}
            </StyledMenu>
        </div>
        <StyledLink to="/dashboard">
            <Accordion>
                <AccordionSummary>
                    <Typography style={{textAlign:"left"}}>Dashboard</Typography>
                </AccordionSummary>
            </Accordion>
        </StyledLink>
        <Accordion>
            <AccordionSummary>
                <Typography style={{textAlign:"left"}}>Pelayanan</Typography>
            </AccordionSummary>
        </Accordion>
        <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ArrowRightIcon></ArrowRightIcon>
                <Typography>Akademik</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.root}>
                    <List>
                        {['Surat Keterangan Mahasiswa',
                         'Transkrip Nilai',
                         'Surat Observasi',
                         'Surat PKL',
                         'Surat Penelitian',
                         'Permohonan Penundaan Pembayaran',
                         'Permohonan Pembayaran Tertunda',
                         'Permohonan Pengisian KRS Tertunda'].map((link,yay) => (
                        <div>
                            {yay===1 ? 
                                <StyledLink to="/transkripNilai">
                                    <ListItem> 
                                        <ListItemText style={{marginLeft:24}} primary={link} />
                                    </ListItem>
                                </StyledLink>
                                : 
                                <ListItem>
                                    <ListItemText style={{marginLeft:24, color:'grey'}} primary={link} />
                                </ListItem>
                            }
                        </div>
                        
                        ))}
                    </List>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ArrowRightIcon></ArrowRightIcon>
                <Typography>Peminjaman</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.root}>
                    <List>
                        {['Peminjaman Ruang', 'Peminjaman Kendaraan', 'Peminjaman Alat', 'Peminjaman Jasa'].map((link,non) => (
                        <div>
                            {non===2 ? 
                                <ListItem>
                                    <ListItemText style={{marginLeft:24, color:'grey'}} primary={link} />
                                </ListItem>
                                : 
                                <div>
                                    {non===0 && 
                                        <StyledLink to="/peminjamanRuang">
                                            <ListItem>
                                                <ListItemText style={{marginLeft:24}} primary={link} />
                                            </ListItem>
                                        </StyledLink>
                                    }
                                    {non===1 && 
                                        <StyledLink to="/peminjamanKendaraan">
                                            <ListItem>
                                                <ListItemText style={{marginLeft:24}} primary={link} />
                                            </ListItem>
                                        </StyledLink>
                                    }
                                    {non===3 && 
                                        <StyledLink to="/peminjamanJasa">
                                            <ListItem>
                                                <ListItemText style={{marginLeft:24}} primary={link} />
                                            </ListItem>
                                        </StyledLink>
                                    }
                                </div>
                            }
                        </div>
                        ))}
                    </List>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ArrowRightIcon></ArrowRightIcon>
                <Typography>Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.root}>
                    <List>
                        {['Data Penelitian Dosen', 'Data Penelitian Mahasiswa'].map((link) => (

                        <ListItem>
                           
                            <ListItemText style={{marginLeft:24, color:'grey'}} primary={link} />
  
                        </ListItem>
                        
                        ))}
                    </List>
                </div>
            </AccordionDetails>
        </Accordion>
        <StyledLink to="/">
            <Accordion>
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

export default Navbar