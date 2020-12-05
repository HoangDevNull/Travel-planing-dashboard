import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    color: '#FFAF1C',
    minHeight: '100vh'
  }
});

const PageNotFound = ({ classes }) => {
  return (
    <>
      <h1>404</h1>
    </>
  );
};

export default withStyles(styles)(PageNotFound);
