import React from 'react';
import { Box, Typography } from '@material-ui/core';

import PageNotFoundImage from 'assert/images/page_not_found.svg';

const PageNotFound = () => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box height="calc(100vh - 300px)">
        <img src={PageNotFoundImage} alt="notify" />
      </Box>
      <Typography variant="h2">Page not found</Typography>
    </Box>
  );
};

export default PageNotFound;
