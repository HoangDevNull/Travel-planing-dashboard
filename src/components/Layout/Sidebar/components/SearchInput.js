import React from 'react';

import {
  Box,
  fade,
  InputBase,
  makeStyles,
  Popover,
  Hidden,
  IconButton,
  Input,
  InputAdornment
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: 'auto'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '25ch',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '16px 0px 16px 5px'
    }
  },
  search_mobile: {
    width: '100vw',
    padding: '5px 15px',
    fontSize: '14px',
    border: '2px solid #ddd'
  }
}));

const SearchInput = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenSearchMobile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <FontAwesomeIcon color="#ddd" icon={['fas', 'search']} />
          </Box>

          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <IconButton color="inherit" onClick={handleOpenSearchMobile}>
          <FontAwesomeIcon color="#ddd" icon={['fas', 'search']} />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Input
            startAdornment={
              <InputAdornment position="start">
                <FontAwesomeIcon color="#ddd" icon={['fas', 'search']} />
              </InputAdornment>
            }
            placeholder="Search..."
            className={classes.search_mobile}
          />
        </Popover>
      </Hidden>
    </>
  );
};

export default SearchInput;
