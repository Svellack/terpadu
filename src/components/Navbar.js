import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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

            <Link to="/dashboard">
                <Accordion square>
                    <AccordionSummary>
                        <Typography style={{textAlign:"left"}}>Dashboard</Typography>
                    </AccordionSummary>
                </Accordion>
            </Link>

            <Accordion square>
                <AccordionSummary>
                    <Typography style={{textAlign:"left"}}>Pelayanan</Typography>
                </AccordionSummary>
            </Accordion>

            <Accordion square>
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
                                    <Link to="/transkripNilai">
                                        <ListItem> 
                                            <ListItemText style={{marginLeft:24}} primary={link} />
                                        </ListItem>
                                    </Link>
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

            <Accordion square>
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
                                            <Link to="/peminjamanRuang">
                                                <ListItem>
                                                    <ListItemText style={{marginLeft:24}} primary={link} />
                                                </ListItem>
                                            </Link>
                                        }
                                        {non===1 && 
                                            <Link to="/peminjamanKendaraan">
                                                <ListItem>
                                                    <ListItemText style={{marginLeft:24}} primary={link} />
                                                </ListItem>
                                            </Link>
                                        }
                                        {non===3 && 
                                            <Link to="/peminjamanJasa">
                                                <ListItem>
                                                    <ListItemText style={{marginLeft:24}} primary={link} />
                                                </ListItem>
                                            </Link>
                                        }
                                    </div>
                                }
                            </div>
                            ))}
                        </List>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion square>
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

            <Link to="/">
                <Accordion square>
                    <AccordionSummary>
                        <Typography style={{textAlign:"left"}}>Keluar</Typography>
                    </AccordionSummary>
                </Accordion>
            </Link>
        </Grid>
  )
}  

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
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