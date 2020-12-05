import React from 'react';

import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
const Home = () => {
  const socket = useSelector((state) => state?.socket?.socketInstance);
  if (socket) {
    socket.emit('events', 'Done connection');
  }
  return <Box>"home"</Box>;
};

export default Home;
