import React from 'react';
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  IconButton,
  CardHeader,
  Box,
  Avatar
} from '@material-ui/core';

import { EditOutlined, BlockOutlined } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

import NotifyDialog from 'components/common/components/NotifyDialog';

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
  alert: {
    padding: '0px 10px',
    marginTop: 5
  },
  font_bold: {
    fontWeight: 'bold'
  },
  p_5: {
    fontSize: 12,
    padding: 5
  },
  content: {
    padding: '0px 16px',
    '&:last-child': {
      paddingBottom: 16
    }
  }
}));

const statusData = [
  {
    name: 'Activated',
    type: 'success'
  },
  {
    name: 'Pending',
    type: 'warning'
  },
  {
    name: 'Blocked',
    type: 'error'
  }
];

const PostCard = ({ id, title, createdAt, user, category, status }) => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleEdit = () => {
    history.push('/post/' + id);
  };
  const handleBlock = () => {
    setOpen(true);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Alert
              icon={false}
              variant="filled"
              severity={statusData.find((e) => e.name === status)?.type}
              className={classes.alert}
              classes={{
                message: classes.p_5
              }}
            >
              {status}
            </Alert>
          }
          title={
            <Typography variant="body2" className={classes.font_bold}>
              {title}
            </Typography>
          }
        />

        <CardContent classes={{ root: classes.content }}>
          <Box display="flex" flexDirection="column">
            <Typography variant="body2" noWrap>
              Ngày đăng: {createdAt}
            </Typography>
            <Typography variant="body2" noWrap>
              Chủ đề: {category}
            </Typography>
            <Box display="flex">
              <Box mt="10px" flex="1" display="flex" alignItems="center">
                <Avatar src={user?.avatar} />
                <Box ml="15px">
                  <Typography
                    variant="body2"
                    className={classes.font_bold}
                    noWrap
                  >
                    {user?.username}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mr="-16px">
                <IconButton color="primary" onClick={handleEdit}>
                  <EditOutlined />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={handleBlock}
                  disabled={status === 'Blocked'}
                >
                  <BlockOutlined />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <NotifyDialog
        content={`Bạn có chắc chắn rằng sẽ block bài viết này, tên bài viết : ${title}`}
        open={open}
        onAgree={() => setOpen(false)}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default PostCard;
