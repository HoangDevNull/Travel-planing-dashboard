import React from 'react';

import { Grid } from '@material-ui/core';

import ChartCard from './components/ChartCard';

const data = [
  {
    title: 'Tài khoản đã active',
    detail: '1234/1500',
    description: '80%'
  },
  {
    title: 'Số bài viết được duyệt',
    detail: '100/150',
    description: '80%'
  },
  {
    title: 'Báo cáo từ người dùng',
    detail: '100',
    description: '80% chưa trả lời'
  },
  {
    title: 'Số tài khoản bị block',
    detail: '100',
    description: '10%'
  }
];

const styles = [
  {
    icon: 'users',
    descColor: '#4caf50'
  },
  {
    icon: 'chalkboard-teacher',
    descColor: '#4caf50'
  },
  {
    icon: 'tools',
    descColor: '#f44336'
  },
  {
    icon: 'user-lock',
    descColor: '#4caf50'
  }
];

const First = () => {
  return (
    <>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} lg={3}>
          <ChartCard
            {...item}
            styles={styles[i]}
            active={i === data.length - 1}
          />
        </Grid>
      ))}
    </>
  );
};

export default First;
