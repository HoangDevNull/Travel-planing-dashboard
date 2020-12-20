import React from 'react';

import {
  Card,
  IconButton,
  makeStyles,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  useTheme,
  Badge
} from '@material-ui/core';

import { purple } from '@material-ui/core/colors';

import { Line } from 'react-chartjs-2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Active users',
      fill: false,
      borderColor: '#3867d6',
      pointBorderColor: '#3867d6',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#3867d6',
      pointHoverBorderWidth: 8,
      pointRadius: 5,
      data: [30, 1, 80, 23, 56, 1, 40]
    },
    {
      label: 'Viewers',
      fill: false,
      borderColor: purple[500],
      pointBorderColor: purple[500],
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: purple[500],
      pointHoverBorderWidth: 8,
      pointRadius: 5,
      data: [0, 10, 15, 20, 25, 0, 0, 0]
    }
  ]
};
const useStyles = makeStyles((theme) => ({
  line_chart: {
    display: 'block',
    width: '100%',
    height: 375,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 250px)'
    }
  },
  list_user: {
    height: 375,
    overflow: 'auto'
  },
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700'
  }
}));

const Second = () => {
  const classes = useStyles();
  const theme = useTheme();

  // let chartRef = React.useRef(null);

  return (
    <>
      <Grid item xs={12} lg={9}>
        <Card>
          <CardHeader
            action={
              <IconButton>
                <FontAwesomeIcon
                  size="sm"
                  color={theme.palette.primary.textColor}
                  icon={['fas', 'braille']}
                />
              </IconButton>
            }
            title={
              <Typography variant="h5">Biểu đồ lưu lượng truy cập</Typography>
            }
          />
          <Divider />
          <CardContent>
            <Line
              // ref={(node) => (chartRef = node)}
              height={375}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      stacked: true,
                      gridLines: {
                        display: false
                      }
                    }
                  ]
                }
              }}
              data={data}
              className={classes.line_chart}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Split conent here */}

      <Grid item xs={12} lg={3}>
        <Card>
          <CardHeader
            action={
              <IconButton>
                <FontAwesomeIcon
                  size="sm"
                  color={theme.palette.primary.textColor}
                  icon={['fas', 'braille']}
                />
              </IconButton>
            }
            title={<Typography variant="h5">Đang online</Typography>}
          />
          <Divider />
          <CardContent>
            <List className={classes.list_user}>
              {[
                'Join teo',
                'Up town func',
                'Dung Nguyen',
                'Dung Nguyen2 ',
                'Dung Nguyen 3 ',
                ' Hanh Nguyen'
              ].map((value) => {
                return (
                  <ListItem key={value} divider button>
                    <ListItemText
                      primary={`${value + 1}`}
                      secondary="10 phút trước"
                    />

                    <ListItemAvatar>
                      <Badge
                        overlap="circle"
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                        variant="dot"
                        classes={{
                          badge: classes.badge
                        }}
                      >
                        <Avatar alt={`Avatar n°${value + 1}`} src={null} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemSecondaryAction>
                      <IconButton>
                        <FontAwesomeIcon
                          size="xs"
                          color={theme.palette.primary.textColor}
                          icon={['fas', 'link']}
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Second;
