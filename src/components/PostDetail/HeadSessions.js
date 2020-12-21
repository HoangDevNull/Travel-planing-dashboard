import React from 'react';
import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => `url(${props?.image})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
    zIndex: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    width: 100,
    height: 100,
    border: '5px solid #fff'
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const HeadSession = (props) => {
  const classes = useStyles(props);

  const { user, title, createdAt } = props;

  return (
    <Box position="relative" height="700px" width="100%">
      <Box className={classes.mask} width="100%" height="700px">
        <Box>
          <Typography
            variant="h6"
            color="secondary"
            className={classes.font_bold}
            gutterBottom
          >
            {createdAt}
          </Typography>
        </Box>
        <Box width="70%">
          <Typography
            variant="h3"
            color="secondary"
            align="center"
            className={classes.font_bold}
            gutterBottom
          >
            {title}
          </Typography>
        </Box>
        <Avatar src={user?.avatar} className={classes.avatar} />
        <Box mt="10px">
          <Typography
            variant="h6"
            color="secondary"
            className={classes.font_bold}
            gutterBottom
          >
            {user?.username}
          </Typography>
        </Box>
        <Box mt="10px">
          <Typography variant="body1" color="secondary" gutterBottom>
            {user?.country}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.root} width="100%" height="700px" />
    </Box>
  );
};

export default HeadSession;
