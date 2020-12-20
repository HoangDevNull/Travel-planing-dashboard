import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import {
  StyledTableRow,
  StyledTableCell
} from 'components/common/components/StyledTable';

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  cell_index: {
    width: 10
  }
});

const TableSubject = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell
              className={classes.cell_index}
              align="left"
              size="small"
            >
              #
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Tên lớp học phần</b>
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Giáo viên</b>
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Tuần</b>
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Phòng</b>
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Thứ</b>
            </StyledTableCell>
            <StyledTableCell align="left" size="small">
              <b>Tiết</b>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell scope="row">{i}</StyledTableCell>
              <StyledTableCell align="left">{row.subject}</StyledTableCell>
              <StyledTableCell align="left">{row.teacher}</StyledTableCell>
              <StyledTableCell align="left">{row.week}</StyledTableCell>
              <StyledTableCell align="left">{row.room}</StyledTableCell>
              <StyledTableCell align="left">{row.day}</StyledTableCell>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableSubject;
