import React from 'react'
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {IconButton} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const theme = createTheme({
    props: {
        MuiTablePagination: {
        labelRowsPerPage:'',
        rowsPerPageOptions:'',
        SelectProps:''
      },
    },
});

function TablePaginationActions(props) {
  const classes1 = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <div className={classes1.root}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
    color: "black",
    borderRight:"solid lightgrey 1px"
  },
  body: {
    fontSize: 14,
    borderRight:"solid lightgrey 1px"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(minggu, senin, selasa, rabu, kamis, jumat, sabtu) {
  return { minggu, senin, selasa, rabu, kamis, jumat, sabtu};
}

//24jam
const rows = [
  createData(1, 2, '3', '4', 5, 6, 7),
  createData(2, 2, '3', '4', 5, 6, 7),
  createData(3, 2, '3', '4', 5, 6, 7),
  createData(4, 2, '3', '4', 5, 6, 7),
  createData(5, 2, '3', '4', 5, 6, 7),
  createData(6, 2, '3', '4', 5, 6, 7),
  createData(7, 2, '3', '4', 5, 6, 7),
  createData(8, 2, '3', '4', 5, 6, 7),
  createData(9, 2, '3', '4', 5, 6, 7),
  createData(10, 2, '3', '4', 5, 6, 7),
  createData(11, 2, '3', '4', 5, 6, 7),
  createData(12, 2, '3', '4', 5, 6, 7),
  createData(13, 2, '3', '4', 5, 6, 7),
].sort((a, b) => (a.senin < b.senin ? -1 : 1));;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});


const TabelWaktu = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(12);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  return (
    <div className={classes2.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center">Minggu</StyledTableCell>
                <StyledTableCell align="center">Senin</StyledTableCell>
                <StyledTableCell align="center">Selasa</StyledTableCell>
                <StyledTableCell align="center">Rabu</StyledTableCell>
                <StyledTableCell align="center">Kamis</StyledTableCell>
                <StyledTableCell align="center">Jumat</StyledTableCell>
                <StyledTableCell style={{borderRight:"none"}} align="center">Sabtu</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
            ).map((row) => (
                <StyledTableRow key={row.minggu}>
                  <StyledTableCell align="center" component="th" scope="row">{row.minggu}</StyledTableCell>
                  <StyledTableCell align="center">{row.senin}</StyledTableCell>
                  <StyledTableCell align="center">{row.selasa}</StyledTableCell>
                  <StyledTableCell align="center">{row.rabu}</StyledTableCell>
                  <StyledTableCell align="center">{row.kamis}</StyledTableCell>
                  <StyledTableCell align="center">{row.jumat}</StyledTableCell>
                  <StyledTableCell style={{borderRight:"none"}} align="center">{row.sabtu}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <ThemeProvider theme={theme}>
                <TablePagination
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  ActionsComponent={TablePaginationActions}
                  style={{color:"white"}}
                />
                </ThemeProvider>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        </div>
  )
}
export default TabelWaktu