import React from 'react';

import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Divider,
  Container,
  Button
} from '@material-ui/core';

import Preview from './Preview';
import HeadSessions from './HeadSessions';
import withRole from 'components/common/HOC/withRole';
import { useHistory, useParams } from 'react-router-dom';

import { postData } from 'components/ViewAllPost/data';
import NotifyDialog from 'components/common/components/NotifyDialog';

const PostDetail = () => {
  const history = useHistory();
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(false);

  const post = postData.find((item) => item.id === Number(id));

  const handleClick = (status) => {
    if (status === 1) {
      setContent('Bạn có đồng ý duyệt bài viết nay không ?');
    } else {
      setContent('Bạn có đồng ý block bài viết nay không ?');
    }
    setOpen(true);
  };

  const handleRoute = () => {
    history.push('/all-posts');
  };
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
            <HeadSessions {...post} />
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <Preview />
          </Grid>
          <Grid item xs={2} />
          <Grid item container justify="space-around" xs={8}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(1)}
            >
              Duyệt bài này
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleRoute()}
            >
              Huỷ bỏ
            </Button>
            <Button
              onClick={() => handleClick(-1)}
              variant="contained"
              style={{
                background: 'red',
                color: '#fff'
              }}
            >
              Block bài này
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Container>
      <NotifyDialog
        content={content}
        open={open}
        onAgree={() => handleRoute()}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default withRole(PostDetail, 'admin');
