import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
import FindInPageIcon from '@material-ui/icons/FindInPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const tableNav = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <div className={tableNav.root}>
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
  const tableStyle = useStyles();
  const tableAll = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 12));
    setPage(0);
  };
  
  return (
    <div className={tableAll.root}>
      <TableContainer component={Paper}>
        <Table size="small" className={tableStyle.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">Pelayanan</StyledTableCell>
              <StyledTableCell align="center">Diajukan</StyledTableCell>
              <StyledTableCell align="center">Pengaju</StyledTableCell>
              <StyledTableCell style={{borderRight:"none"}} align="center"></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
            ).map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell align="center" component="th" scope="row">{row.no}</StyledTableCell>
                <StyledTableCell align="center">{row.pelayanan}</StyledTableCell>
                <StyledTableCell align="center">{row.diaju}</StyledTableCell>
                <StyledTableCell align="center">{row.pengaju}</StyledTableCell>
                <StyledTableCell style={{borderRight:"none"}} align="center">
                  <Link to="/dashABelumDetail"><IconButton><FindInPageIcon/></IconButton></Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows < 12 && (
              <TableRow style={{ height: 53 * emptyRows }}></TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[12]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
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