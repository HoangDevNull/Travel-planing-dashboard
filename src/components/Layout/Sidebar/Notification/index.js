import React from 'react';
import { makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const Notification = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const iconColor = '#fff';

  const classes = useStyles();
  return <>Notification</>;
};

export default Notification;
