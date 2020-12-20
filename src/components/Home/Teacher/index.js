import React from 'react';

import { Grid, Typography, Box, makeStyles, Divider } from '@material-ui/core';

import TodaySchedule from './TodaySchedule';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 10
    }
  }
}));

const TeacherHome = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {/* Over view  */}
      <Grid item xs={12}>
        <Box my="10px">
          <Typography variant="h5">
            Thời khóa biểu Học kỳ 1, năm học 2020 - 2021
          </Typography>
        </Box>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <TodaySchedule />
      </Grid>
    </Grid>
  );
};

export default TeacherHome;
