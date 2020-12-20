import React from 'react';

import { withStyles } from '@material-ui/core';

import Sidebar from './Sidebar';
import Snackbar from './Snackbar';

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.type.includes('dark') ? '#FFF' : '#333',
      outline: 'none'
    }
  }
});

function Layout({ children }) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
      <Snackbar />
    </>
  );
}

export default withStyles(styles)(Layout);
