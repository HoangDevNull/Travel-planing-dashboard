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
  GridListTileBar,
  IconButton
} from '@material-ui/core';

import { Info } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import withRole from 'components/common/HOC/withRole';
import data from './data';
import DialogImage from './components/DialogImage';

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
  },
  img: {
    objectFit: 'cover'
  }
}));

const Media = () => {
  const history = useHistory();
  const classes = useStyles();
  let dialogRef = React.createRef();

  const handleOpenDialog = (index) => {
    const image = data[index];
    dialogRef.open(image);
  };

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
            <GridList cellHeight={350} className={classes.gridList}>
              {data.map((tile, i) => {
                const randomPhoto = Math.floor(Math.random() * 5000) + 1;

                const imgUrl = `https://picsum.photos/1920/1080?random=${randomPhoto}`;
                const randomRow = Math.floor(Math.random() * 2) + 1;
                return (
                  <GridListTile
                    key={imgUrl}
                    cols={i % 2 !== 0 || tile.status === 'Pending' ? 0.5 : 1}
                    rows={1}
                  >
                    <img
                      className={classes.img}
                      src={imgUrl}
                      alt={tile.title}
                    />
                    <GridListTileBar
                      onClick={() => handleOpenDialog(i)}
                      title={tile.title}
                      actionIcon={
                        <IconButton
                          aria-label={`star ${tile.title}`}
                          className={classes.icon}
                        >
                          <Info />
                        </IconButton>
                      }
                      actionPosition='right'
                      className={classes.titleBar}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </Grid>
        </Grid>
      </Grid>

      <DialogImage
        getRef={(ref) => {
          dialogRef = ref;
        }}
      />
    </Box>
  );
};

export default withRole(Media, 'admin');
