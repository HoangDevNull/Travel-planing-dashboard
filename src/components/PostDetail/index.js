import React from 'react';

import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Divider,
  Container
} from '@material-ui/core';

import Preview from './Preview';
import withRole from 'components/common/HOC/withRole';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();

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
                Chi tiết
              </Typography>
            </Box>
          </Box>

          <Divider />
        </Grid>
      </Grid>

      {/* Content  */}
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Preview />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withRole(PostDetail, 'admin');
