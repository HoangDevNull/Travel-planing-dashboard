import React from "react";
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
} from "@material-ui/core";

import PostCard from "./components/PostCard";
import { MoreVert } from "@material-ui/icons";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    marginTop: 20
  },
  active_date: {
    background: theme.palette.primary.main,
    color: "#fff"
  },
  font_bold: {
    fontWeight: "bold"
  }
}));

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const postData = [
  {
    id: 1,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_1.png"
    },
    category: "Travel on budget trips",
    status: "Activated"
  },
  {
    id: 2,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_2.png"
    },
    category: "Travel on budget trips",
    status: "Activated"
  },
  {
    id: 3,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_3.png"
    },
    category: "Travel on budget trips",
    status: "Pending"
  },
  {
    id: 4,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_4.png"
    },
    category: "Travel on budget trips",
    status: "Blocked"
  },
  {
    id: 5,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_6.png"
    },
    category: "Travel on budget trips",
    status: "Blocked"
  },
  {
    id: 6,
    title: "Travel around the word with only 1$",
    createdAt: "December 23, 2018",
    user: {
      username: "George Fields",
      avatar:
        "https://react-material-kit.devias.io/static/images/avatars/avatar_7.png"
    },
    category: "Travel on budget trips",
    status: "Blocked"
  }
];

const LatestPost = () => {
  const history = useHistory();
  const classes = useStyles();
  const handleClickViewAll = () => {
    history.push("/all-posts");
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
            Bài viết gần đây
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
          {postData.map((item) => (
            <Grid key={item.id} item xs={12} md={6}>
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
              onClick={handleClickViewAll}
            >
              Xem tất cả
            </Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default LatestPost;
