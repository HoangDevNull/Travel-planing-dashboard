import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import withRole from 'components/common/HOC/withRole';
import LatestPost from './LatestPost';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

const Posts = () => {
  const history = useHistory();

  return (
    <Box>
      <Grid container justify="space-between">
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
            <Typography color="textPrimary">Bài viết</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my="15px" display="flex">
            <Box flex="1">
              <Typography gutterBottom variant="h5">
                Quản lý bài viết
              </Typography>
            </Box>
          </Box>

          <Divider />
        </Grid>
      </Grid>

      {/* Content  */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <LatestPost />
        </Grid>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          item
          xs={12}
          md={4}
        >
          <Grid item xs={12}>
            <LineChart />
          </Grid>
          <Grid item xs={12}>
            <PieChart />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withRole(Posts, 'admin');
