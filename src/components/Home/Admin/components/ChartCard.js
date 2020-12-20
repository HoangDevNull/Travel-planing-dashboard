import React from 'react';

import { Paper, Box, makeStyles, Typography, Avatar } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  active: {
    backgroundColor: theme.palette.primary.main
  },
  caption_text: {
    marginLeft: 8,
    backgroundColor: 'rgba(76, 175, 80, 0.08)',
    cursor: 'default',
    height: 20,
    display: 'inline-flex',
    padding: '4px 8px',
    flexGrow: 0,
    fontSize: '0.75rem',
    minWidth: 20,
    alignItems: 'center',
    flexShrink: 0,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    borderRadius: 2,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    width: theme.spacing(7),
    height: theme.spacing(7),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(5),
      height: theme.spacing(5)
    }
  },
  active_card: {
    color: '#fff !important'
  },
  icon_active: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  }
}));

const ChartCard = ({ title, description, detail, styles, active }) => {
  const classes = useStyles();

  return (
    <Paper
      className={clsx([classes.root, active && classes.active])}
      elevation={3}
    >
      <Box flexGrow="1">
        <Typography
          variant="overline"
          className={active ? classes.active_card : null}
          gutterBottom
          noWrap
        >
          {title}
        </Typography>
        <Box display="flex" flexWrap="wrap" alignItems="center">
          <Typography
            variant="h4"
            gutterBottom
            className={active ? classes.active_card : null}
          >
            {detail}
          </Typography>
          <span
            className={classes.caption_text}
            style={{
              color: styles?.descColor
            }}
          >
            {description}
          </span>
        </Box>
      </Box>
      <Avatar className={clsx([classes.icon, active && classes.icon_active])}>
        <FontAwesomeIcon color="#fff" icon={['fas', styles?.icon]} />
      </Avatar>
    </Paper>
  );
};

export default ChartCard;
