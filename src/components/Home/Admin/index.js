import React from 'react';

import { Grid, Typography, Box } from '@material-ui/core';

import First from './Firsts';
import Second from './Second';

const AdminHome = () => {
  return (
    <Grid container spacing={3}>
      {/* Over view  */}
      <Grid item xs={12}>
        <Box mt="10px" mb="-10px">
          <Typography variant="h5">Dữ liệu tổng thể</Typography>
        </Box>
      </Grid>
      <First />
      <Second />
    </Grid>
  );
};

export default AdminHome;
