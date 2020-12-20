import React from 'react';
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  CardHeader,
  useTheme
} from '@material-ui/core';

import { Line } from 'react-chartjs-2';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20
  },
  font_bold: {
    fontWeight: 'bold'
  },
  content: {
    padding: '0px 16px',
    '&:last-child': {
      paddingBottom: 16
    }
  },
  line_chart: {
    display: 'block',
    width: '100%',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 250px)'
    }
  }
}));

const LineChart = () => {
  const theme = useTheme();
  const classes = useStyles();
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Post',
        fill: false,
        borderColor: theme.palette.primary.main,
        pointBorderColor: theme.palette.primary.main,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderWidth: 8,
        pointRadius: 5,
        data: [0, 10, 15, 20, 25, 25, 16, 0]
      }
    ]
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.font_bold}>
            Post summary
          </Typography>
        }
      />

      <CardContent classes={{ root: classes.content }}>
        <Line
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
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
  );
};
export default LineChart;
