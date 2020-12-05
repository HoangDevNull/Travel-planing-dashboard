import React from 'react';
import {
  Typography,
  makeStyles,
  Box,
  IconButton,
  Badge,
  Avatar,
  Button
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { themeAction } from 'redux/theme';

import SearchInput from './components/SearchInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  user_name: {
    maxWidth: 120,
    textTransform: 'none !important'
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const SidebarHead = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const toggleTheme = () => {
    dispatch(themeAction.loadTheme(!isDark));
  };

  const iconColor = isDark ? '#333' : '#fff';

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="body1" noWrap>
        Hi, wellcome back
      </Typography>

      <SearchInput />

      <Box flex="1" />

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon color={iconColor} icon={['far', 'envelope']} />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="error">
            <FontAwesomeIcon color={iconColor} icon={['far', 'bell']} />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={toggleTheme}>
          <FontAwesomeIcon
            color={iconColor}
            icon={['far', isDark ? 'sun' : 'moon']}
          />
        </IconButton>
        <Button
          color="inherit"
          startIcon={
            <Avatar
              variant="rounded"
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
              className={classes.small}
            />
          }
        >
          <Typography className={classes.user_name} noWrap variant="body1">
            Hoang
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default SidebarHead;
