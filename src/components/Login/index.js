import React from 'react';

import { Grid, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Login = () => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    history.push('/');
  }

  return (
    <Grid container>
      {/* <Paper elevation={1} square={true}> */}
      <Grid container>
        <Grid item xs={12} md={4}>
          <LeftSide />
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={8}>
            <RightSide />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Login;
