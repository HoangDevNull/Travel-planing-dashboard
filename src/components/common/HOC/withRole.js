import React from 'react';

import { Typography, Box } from '@material-ui/core';
import DeniedImage from 'assert/images/notify.svg';

import { connect } from 'react-redux';
export default function withRole(WrappedComponent, role = []) {
  const Component = (props) => {
    const { currentRole } = props;

    return role?.includes(currentRole) ? (
      <WrappedComponent {...props} />
    ) : (
      <Box
        minHeight="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="calc(100vh - 300px)">
          <img src={DeniedImage} alt="notify" />
        </Box>
        <Typography variant="h2">ACCESS DENIED</Typography>
      </Box>
    );
  };
  const mapStateToProps = (state) => {
    return {
      currentRole: state?.auth?.role
    };
  };

  return connect(mapStateToProps)(Component);
}
