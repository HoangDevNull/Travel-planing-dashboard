import React from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Box,
  makeStyles
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const navigationRoutes = [
  {
    name: 'Dashboard',
    to: '/',
    icon: <FontAwesomeIcon size="lg" icon={['fab', 'react']} />
  },
  {
    name: 'Quản lý sinh viên',
    to: '/',
    icon: <FontAwesomeIcon size="lg" icon={['fas', 'users']} />
  },
  {
    name: 'Quản lý giáo viên',
    to: '/',
    icon: <FontAwesomeIcon size="lg" icon={['fas', 'user-tie']} />
  },
  {
    name: 'Quản lý môn học',
    to: '/',
    icon: <FontAwesomeIcon size="lg" icon={['fas', 'book-open']} />
  },
  {
    name: 'Quản lý lịch học',
    to: '/',
    icon: <FontAwesomeIcon size="lg" icon={['fas', 'calendar-alt']} />
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  list_item_root: {
    marginTop: 10,
    '&$selected': {
      backgroundColor: 'transparent',
      boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
      borderRight: `3px solid ${theme.palette.primary.main}`
    }
  },
  selected: {}
}));

const ListSidebarItem = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List>
        {navigationRoutes.map((item, index) => (
          <ListItem
            button
            key={item.name}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            classes={{
              root: classes.list_item_root,
              selected: classes.selected
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                variant: 'body2'
              }}
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListSidebarItem;
