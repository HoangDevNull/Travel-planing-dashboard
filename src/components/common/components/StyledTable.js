import { withStyles, TableRow, TableCell } from '@material-ui/core';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const HoverbleTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export { StyledTableRow, StyledTableCell, HoverbleTableRow };
