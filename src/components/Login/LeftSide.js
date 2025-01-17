import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Grid,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Link
} from '@material-ui/core';

import LoadingButton from 'components/common/components/LoadingButton';

import { loginAction } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertTitle } from '@material-ui/lab';

library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 10
    }
  }
}));
const LeftSide = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    // Validate
    if (name === 'email') {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const isValid = re.test(String(value).toLowerCase());
      if (!isValid && value?.length > 0) {
        setError({ ...error, [name]: 'Email nhập vào không hợp lệ' });
      } else {
        error?.email !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 254) return;
    } else {
      // Minimum password length have to be 6 character
      if ((value.length < 6 || value.length > 32) && value?.length !== 0) {
        setError({ ...error, [name]: 'Mật khẩu phải có từ 6-32 ký tự' });
      } else {
        error?.password !== '' && setError({ ...error, [name]: '' });
      }
      if (value.length > 32) return;
    }

    setInputData({ ...inputData, [name]: value });
  };

  const handleLogin = () => {
    const { email: emailError, password: passwordErr } = error;
    if (emailError || passwordErr) {
      return;
    }

    const { email, password } = inputData;
    dispatch(loginAction.loadLogin({ email, password }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  // Variable for render
  const { email, password } = inputData;
  const { email: emailError, password: passwordError } = error;
  return (
    <Box className={classes.root}>
      <Grid container justify='flex-start'>
        <Grid item xs={12}>
          <Typography variant='h5'>Đăng nhập</Typography>
        </Grid>

        <Grid item xs={12}>
          <Box mt='20px' />
          <Typography variant='body2'>Tài khoản</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Điền tên tài khoản. VD: nva.17it2@vku.udn.vn'
            fullWidth
            margin='normal'
            variant='outlined'
            type='email'
            value={email}
            name='email'
            onChange={handleInputChange}
            error={emailError.length > 1}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt='10px' />
          <Typography variant='body2'>Mật khẩu</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder='Điền mật khẩu'
            fullWidth
            margin='normal'
            variant='outlined'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge='end'
                  >
                    <FontAwesomeIcon
                      size='sm'
                      icon={['far', showPassword ? 'eye-slash' : 'eye']}
                    />
                  </IconButton>
                </InputAdornment>
              )
            }}
            value={password}
            name='password'
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            error={passwordError.length > 1}
            helperText={passwordError}
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt='20px' />
          <Grid container justify='space-between'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRememberMe}
                  onChange={(e) => setIsRememberMe(e.target.checked)}
                  color='primary'
                />
              }
              label='Lưu phiên đăng nhập'
            />

            <Box mt='10px'>
              <Link href='#'>Reset password</Link>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box mt='20px' />
          <LoadingButton
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleLogin}
            disabled={
              passwordError?.length > 1 ||
              emailError?.length > 1 ||
              email?.length === 0 ||
              password?.lenght === 0
            }
            loading={loading}
            label='Login'
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Alert severity='info'>
          <AlertTitle>User test</AlertTitle>
          You can use <strong>admin@onism.net</strong> and password{' '}
          <strong>admin123</strong>
        </Alert>
      </Box>
    </Box>
  );
};

export default LeftSide;
