import React from 'react';
import {
  Typography,
  makeStyles,
  Avatar,
  Button,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from 'redux/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  user_name: {
    maxWidth: 120,
    textTransform: 'none !important'
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

const UserProfile = () => {
  const { isLoggedIn, userProfile } = useSelector((state) => state.auth);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  //  Render

  const handleLogout = () => {
    dispatch(logoutAction.setLogout());
    history.push('/signin');
  };

  if (!isLoggedIn) return false;
  return (
    <>
      <Button
        color="inherit"
        startIcon={
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={userProfile?.avatar}
            className={classes.small}
          />
        }
        onClick={handleToggle}
        ref={anchorRef}
      >
        <Typography className={classes.user_name} noWrap variant="body1">
          {userProfile?.lastName}
        </Typography>
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <FontAwesomeIcon
                        size="sm"
                        icon={['fas', 'user-circle']}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Thông tin" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <FontAwesomeIcon size="sm" icon={['fas', 'lock']} />
                    </ListItemIcon>
                    <ListItemText primary="Tài khoản" />
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <FontAwesomeIcon
                        size="sm"
                        icon={['fas', 'sign-out-alt']}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Đăng xuất" />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default UserProfile;
