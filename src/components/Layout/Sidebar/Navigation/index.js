import React from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Box,
  makeStyles,
  Collapse,
  useTheme
} from '@material-ui/core';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  adminNavigationRoutes,
  teacherNavigationRoutes,
  studentNavigationRoutes,
  defaultNavigationRoutes
} from './_routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20
  },
  list_item_root: {
    paddingLeft: 20,
    marginTop: 10,
    '&$selected': {
      backgroundColor: 'transparent',
      boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
      borderRight: `3px solid ${theme.palette.primary.main}`
    }
  },
  list_item_child_root: {
    marginTop: 10,
    '&$selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main
    }
  },
  selected: {},
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Navigation = () => {
  const { role, isLoggedIn } = useSelector((state) => state.auth);
  const history = useHistory();
  const theme = useTheme();
  const [childOpen, setChildOpen] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [childSelectedIndex, setChildSelectedIndex] = React.useState(null);

  // Render variable
  let listNavigationItem = [];

  if (!isLoggedIn) {
    listNavigationItem = defaultNavigationRoutes;
  } else {
    listNavigationItem = adminNavigationRoutes;
  }

  const handleListItemClick = (index, url, isHaveChild) => {
    // close collapse
    if (index === selectedIndex && childOpen) {
      setChildOpen(null);
      return;
    }

    // Update selected styles
    setSelectedIndex(index);
    if (isHaveChild) {
      setChildOpen(listNavigationItem[index].name);
      setChildSelectedIndex(null);
    }

    if (url) {
      history.push(url);
    }
  };

  const handleChildClick = (index, url) => {
    setChildSelectedIndex(index);
    if (url) {
      history.push(url);
    }
  };

  // Styles for class
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List disablePadding={true}>
        {listNavigationItem.map((item, index) => {
          const { child } = item;
          return (
            <React.Fragment key={item.name}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={() =>
                  handleListItemClick(index, item?.to, child ? true : false)
                }
                classes={{
                  root: classes.list_item_root,
                  selected: classes.selected
                }}
              >
                <ListItemIcon>
                  <FontAwesomeIcon
                    size="lg"
                    icon={[item?.icon?.type, item?.icon?.name]}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'body2'
                  }}
                  primary={item.name}
                />

                {child && (
                  <FontAwesomeIcon
                    size="lg"
                    icon={[
                      'fas',
                      childOpen === item.name ? 'angle-up' : 'angle-down'
                    ]}
                  />
                )}
              </ListItem>

              {child && (
                <Collapse
                  in={childOpen === item.name}
                  timeout="auto"
                  unmountOnExit
                >
                  {child.map((childItem, index) => (
                    <List component="div" key={childItem.name} disablePadding>
                      <ListItem
                        button
                        className={classes.nested}
                        selected={childSelectedIndex === index}
                        onClick={() => handleChildClick(index, childItem?.to)}
                        classes={{
                          root: classes.list_item_child_root,
                          selected: classes.selected
                        }}
                      >
                        <ListItemIcon>
                          <FontAwesomeIcon
                            color={
                              childSelectedIndex === index
                                ? theme.palette.primary.main
                                : theme.palette.primary.bnw
                            }
                            size="lg"
                            icon={[
                              childItem?.icon?.type,
                              childItem?.icon?.name
                            ]}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            variant: 'body2'
                          }}
                          primary={childItem.name}
                        />
                      </ListItem>
                    </List>
                  ))}
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
