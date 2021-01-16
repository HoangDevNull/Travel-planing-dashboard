import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Divider,
  makeStyles,
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton
} from '@material-ui/core';

import { StarBorder as StarBorderIcon } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import withRole from 'components/common/HOC/withRole';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // width: 500,
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
}));

const Media = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box>
      <Grid container justify='space-between'>
        <Grid item>
          <Breadcrumbs separator='›' aria-label='breadcrumb'>
            <Link
              color='inherit'
              href='/'
              onClick={(event) => event.preventDefault()}
            >
              Trang chủ
            </Link>
            <Typography color='textPrimary'>Tổng quan</Typography>
            <Typography color='textPrimary'>Media</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my='15px' display='flex'>
            <Box flex='1'>
              <Typography gutterBottom variant='h5'>
                Quản lý hình ảnh
              </Typography>
            </Box>
          </Box>

          <Divider />

          <Grid item xs={12} className={classes.root}>
            <GridList cellHeight={150} spacing={2} className={classes.gridList}>
              {data.map((tile, i) => {
                const randomPhoto = Math.floor(Math.random() * 5000) + 1;
                const randomHeight = Math.floor(Math.random() * 5) + 2;
                const randomWidth = Math.floor(Math.random() * 5) + 2;
                const imgUrl = `https://picsum.photos/${randomWidth}00/${randomHeight}00?random=${randomPhoto}`;
                const randomRow = Math.floor(Math.random() * 2) + 1;
                return (
                  <GridListTile
                    key={imgUrl}
                    cols={i % 2 !== 0 || tile.status === 'Pending' ? 0.5 : 1}
                    rows={randomRow}
                  >
                    <img src={imgUrl} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      titlePosition='top'
                      actionIcon={
                        <IconButton
                          aria-label={`star ${tile.title}`}
                          className={classes.icon}
                        >
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition='left'
                      className={classes.titleBar}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withRole(Media, 'admin');
