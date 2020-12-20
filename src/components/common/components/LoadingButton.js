import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';

const LoadingButton = ({
  fullWidth = true,
  color = 'primary',
  variant = 'contained',
  onClick,
  loading = false,
  label,
  disabled
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      disabled={loading || disabled}
      color={color}
    >
      {loading && <CircularProgress size={20} />}
      {!loading && label}
    </Button>
  );
};

export default LoadingButton;
