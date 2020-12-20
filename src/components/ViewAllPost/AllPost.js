import React from 'react';
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  IconButton,
  CardHeader,
  LinearProgress,
  Box,
  Grid,
  Button
} from '@material-ui/core';

import PostCard from 'components/Posts/components/PostCard';
import { MoreVert } from '@material-ui/icons';
import clsx from 'clsx';
import { postData as data } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20
  },
  date_text: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  date_circle: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    marginTop: 20
  },
  active_date: {
    background: theme.palette.primary.main,
    color: '#fff'
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const AllPost = () => {
  const [postData, setPostData] = React.useState([...data.slice(0, 8)]);
  const classes = useStyles();

  const handleClickFetchMore = () => {
    const newData = data.slice(postData.length, postData.length + 4);
    setPostData([...postData, ...newData]);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={
          <Typography variant="h6" className={classes.font_bold}>
            Tất cả bài viết
          </Typography>
        }
      />

      <CardContent>
        <Box mt="-20px" mb="20px">
          <LinearProgress variant="determinate" value={80} />
        </Box>

        <Box mb="20px">
          <Typography variant="body1">
            {new Date().toLocaleDateString()}
          </Typography>
        </Box>

        <Box display="flex" my="20px" justifyContent="space-between">
          {days.map((item, index) => (
            <Box key={item}>
              <Typography component="div" align="center" variant="body2">
                {item}
              </Typography>
              <Typography
                component="div"
                className={clsx(
                  classes.date_circle,
                  index === 0 && classes.active_date
                )}
                key={item}
                variant="body2"
                align="center"
                color="inherit"
              >
                {new Date().getDate() + index}
              </Typography>
            </Box>
          ))}
        </Box>

        <Grid container spacing={3}>
          {postData.map((item, index) => (
            <Grid key={item.id} item xs={12} sm="4" md={3}>
              <PostCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid item container justify="center">
          <Box mt="20px">
            <Button
              variant="outlined"
              color="primary"
              className={classes.font_bold}
              onClick={handleClickFetchMore}
              disabled={postData.length === data.length}
            >
              Xem thêm
            </Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AllPost;
