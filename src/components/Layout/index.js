import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';

import { socketAction } from 'redux/socket';
import { ROOT_API } from 'config';

import Sidebar from './Sidebar';

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
  const dispatch = useDispatch();
  useEffect(() => {
    let socket = io.connect(ROOT_API);
    socket.on('connect', () => {
      socket
        .emit('authenticate', {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNjg4NDBlMy1kZDA4LTQ2M2UtOWQ5My0xYWYxNDc4ZjFhY2IiLCJ1c2VySWQiOjEsImlhdCI6MTYwNzAxMTMxNywiZXhwIjoxNjA3NjE2MTE3fQ.9SEAVhrfp73ZS9IglX9M_Mj50BPJvltxhTmUuCIpNsY'
        }) //send the jwt
        .on('authenticated', () => {
          console.log('authenticated');
          dispatch(
            socketAction.loadSocket({
              socketInstance: socket,
              isAuthenticate: true
            })
          );
        })
        .on('unauthorized', (msg) => {
          console.log(`unauthorized: ${JSON.stringify(msg.data)}`);
          dispatch(
            socketAction.loadSocket({
              socketInstance: socket,
              isAuthenticate: false
            })
          );
        });
    });
    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}

export default withStyles(styles)(Layout);
