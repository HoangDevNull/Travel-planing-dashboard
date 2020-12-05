import React from 'react';

import { Paper, Grid, Hidden } from '@material-ui/core';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Login = () => {
  return (
    <Grid container>
      <Paper elevation={1} square={true}>
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
      </Paper>
    </Grid>
  );
};

export default Login;
