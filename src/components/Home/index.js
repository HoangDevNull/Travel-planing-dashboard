import React from 'react';

import { Box, Breadcrumbs, Link, Typography, Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';

import AdminHome from './Admin';
import TeacherHome from './Teacher';
import StudentHome from './Student';

const Home = () => {
  const role = useSelector((state) => state.auth?.role);
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

      {role === 'admin' && <AdminHome />}
      {role === 'student' && <StudentHome />}
      {role === 'teacher' && <TeacherHome />}
    </Box>
  );
};

export default Home;
