import React from 'react'
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {IconButton} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(no, pelayanan, diaju, pengaju, tombol) {
  return { no, pelayanan, diaju, pengaju, tombol };
}

const rows = [
  createData(1, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 Februari 2022', '25 Februari 2022', 2),
  createData(2, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 April 2022', '25 April 2022', 2),
  createData(3, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 Juni 2022', '25 Juni 2022', 2),
  createData(4, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 Juni 2022', '25 Juni 2022', 2),
  createData(5, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 Juni 2022', '25 Juni 2022', 2),
  createData(6, 'Peminjaman Aula Latief Gd. Raden Sartika', '22 Juni 2022', '25 Juni 2022', 2),
].sort((a, b) => (a.pelayanan < b.pelayanan ? -1 : 1));;

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


const Tabel = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 20));
    setPage(0);
  };
  
  return (
    
    <div className={classes2.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">No.</StyledTableCell>
                <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">Pelayanan</StyledTableCell>
                <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">Tanggal Diaju</StyledTableCell>
                <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">Pengaju</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
            ).map((row) => (
                <StyledTableRow key={row.no}>
                  <StyledTableCell style={{borderRight:"solid red 2px"}} align="center" component="th" scope="row">
                    {row.no}
                  </StyledTableCell>
                  <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">{row.pelayanan}</StyledTableCell>
                  <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">{row.diaju}</StyledTableCell>
                  <StyledTableCell style={{borderRight:"solid red 2px"}} align="center">{row.pengaju}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to="/dashABelumDetail"><IconButton><FindInPageIcon/></IconButton></Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[12, { label: 'All', value: -1 }]}
                  
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        </div>
  )
}
export default Tabel