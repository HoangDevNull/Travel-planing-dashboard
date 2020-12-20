import React from 'react';
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  CardHeader,
  useTheme
} from '@material-ui/core';

import { Pie } from 'react-chartjs-2';
const useStyles = makeStyles((theme) => ({
  root: {},
  font_bold: {
    fontWeight: 'bold'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

const PieChart = () => {
  const classes = useStyles();
  const data = {
    labels: ['Activated', 'Pending', 'Blocked'],
    datasets: [
      {
        data: [100, 50, 150],
        backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c'],
        hoverBackgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c']
      }
    ]
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.font_bold}>
            Approve counter
          </Typography>
        }
      />

      <CardContent classes={{ root: classes.content }}>
        <Pie
          height={300}
          options={{
            maintainAspectRatio: false,
            responsive: false,
            legend: {
              position: 'left',
              labels: {
                boxWidth: 10
              }
            }
          }}
          data={data}
          className={classes.line_chart}
        />
      </CardContent>
    </Card>
  );
};
export default PieChart;
