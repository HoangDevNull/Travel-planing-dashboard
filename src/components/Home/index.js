import React from 'react';

import { Box, Breadcrumbs, Link, Typography, Grid } from '@material-ui/core';

import AdminHome from './Admin';

const Home = () => {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              onClick={(event) => event.preventDefault()}
            >
              Trang chủ
            </Link>
            <Typography color="textPrimary">Tổng quan</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <AdminHome />
    </Box>
  );
};

export default Home;
