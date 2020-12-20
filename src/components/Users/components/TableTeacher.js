import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  Checkbox,
  makeStyles,
  TableCell,
  Box,
  IconButton,
  Avatar,
  Typography,
  Link,
  TableContainer,
  TableRow,
  Toolbar,
  Button
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';
import clsx from 'clsx';

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import BlockIcon from '@material-ui/icons/Block';

import { HoverbleTableRow } from 'components/common/components/StyledTable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700
  },
  cell_index: {
    width: 10
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 8
  },
  link: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.bnw
  },
  alert: {
    maxWidth: 150,
    padding: '0px 10px',
    margin: 'auto'
  },
  toolBar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  highlight: {
    backgroundColor: theme.palette.action.hover
  },
  title: {
    flex: '1 1 100%'
  },
  caption_text: {
    marginLeft: 10,
    marginRight: 10,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    cursor: 'default',
    height: 20,
    padding: '4px 8px',
    fontSize: '0.75rem',
    minWidth: 20,
    fontWeight: 500,
    borderRadius: 2,
    letterSpacing: 0.5
  }
}));

function createData(lastName, email, address, phoneNumber, statusAccount) {
  return { lastName, email, address, phoneNumber, statusAccount };
}

const rows = [
  createData('Mr.T', 'Mr.T@gmail.com', 'Viet Nam', '5', 'activated'),
  createData('Ms.K', 'Ms.K@gmail.com', 'USA', '2', 'blocked'),
  createData('Ms.b', 'Ms.A@gmail.com', 'Viet Nam', '3', 'activated'),
  createData('Ms.c', 'Ms.A@gmail.com', 'Singapore', '7', 'activated'),
  createData('Ms.d', 'Ms.A@gmail.com', 'Viet Nam', '8', 'blocked'),
  createData('Ms.e', 'Ms.A@gmail.com', 'Viet Nam', '3', 'activated'),
  createData('Ms.f', 'Ms.A@gmail.com', 'Viet Nam', '6', 'activated')
];

const statusAccount = [
  {
    name: 'activated',
    type: 'success'
  },
  {
    name: 'not activated',
    type: 'warning'
  },
  {
    name: 'blocked',
    type: 'error'
  }
];

const TableTeacher = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAll = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      if (selected.length > 0 && selected.length < rows.length) {
        setSelected([]);
        return;
      }
      // Check all
      const newSelecteds = rows.map((n) => n.lastName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <TableContainer>
      <Toolbar
        className={clsx(classes.toolBar, {
          [classes.highlight]: selected.length > 0
        })}
      >
        <Box display="flex" alignItems="center">
          <Box mr="20px">
            <Typography
              className={classes.title}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              <span className={classes.caption_text}>{selected.length}</span>
              selected
            </Typography>
          </Box>

          {selected.length > 0 && (
            <Button
              fullWidth
              startIcon={<BlockIcon color="error" />}
              variant="outlined"
              color="inherit"
            >
              Block
            </Button>
          )}
        </Box>
      </Toolbar>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.cell_index}
              align="center"
              size="small"
            >
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < rows.length
                }
                checked={rows.length > 0 && selected.length === rows.length}
                onChange={handleSelectAll}
                inputProps={{ 'aria-label': 'select all desserts' }}
                color="primary"
              />
            </TableCell>
            <TableCell align="left" size="small">
              <b>Người dùng</b>
            </TableCell>
            <TableCell align="center" size="small">
              <b>Quốc gia</b>
            </TableCell>
            <TableCell align="center" size="small">
              <b>Số bài viết</b>
            </TableCell>
            <TableCell align="center" size="small">
              <b>Trạng thái tài khoản</b>
            </TableCell>
            <TableCell align="right" size="small">
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            const isItemSelected = isSelected(row.lastName);
            return (
              <HoverbleTableRow key={row.lastName}>
                <TableCell scope="row">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    onClick={(event) => handleClick(event, row.lastName)}
                  />
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={`https://react-material-kit.devias.io/static/images/avatars/avatar_${
                        i + 1
                      }.png`}
                      className={classes.avatar}
                    />
                    <Box>
                      <Link
                        underline="hover"
                        className={classes.link}
                        href={`/profile/${i}`}
                      >
                        {row.lastName}
                      </Link>
                      <Typography variant="body2">{row.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">
                  <Alert
                    variant="filled"
                    severity={
                      statusAccount.find((e) => e.name === row.statusAccount)
                        ?.type
                    }
                    className={classes.alert}
                  >
                    {row.statusAccount}
                  </Alert>
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <IconButton>
                      <ArrowForwardOutlinedIcon size="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </HoverbleTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableTeacher;
