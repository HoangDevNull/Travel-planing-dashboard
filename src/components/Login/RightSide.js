import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-magic-slider-dots/dist/magic-dots.css';

import { Box, makeStyles, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas);

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    maxWidth: 1336,
    height: 'calc(100vh - 400px)',
    minHeight: 500
  },
  head_slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 600px)',
    background: theme.palette.primary.light,
    minHeight: 300
  },
  body_slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    minHeight: 100,
    height: 200
  },
  dot_container: {
    background: '#fff'
  }
}));

const slideDatas = [
  {
    title: 'Private',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aea voluptatibus',
    icon: (
      <FontAwesomeIcon size="10x" color="#fff" icon={['fas', 'shield-alt']} />
    )
  },
  {
    title: 'Accuracy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aea voluptatibus',
    icon: (
      <FontAwesomeIcon size="10x" color="#fff" icon={['fas', 'crosshairs']} />
    )
  },
  {
    title: 'Friendly',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aea voluptatibus',
    icon: <FontAwesomeIcon size="10x" color="#fff" icon={['fas', 'users']} />
  }
];

const RightSide = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    lazyLoad: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box position="absolute" bottom="50px">
        <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
      </Box>
    )
  };

  return (
    <Slider className={classes.root} {...settings}>
      {slideDatas.map((item) => (
        <Box key={item.title}>
          <Box className={classes.head_slide}>{item.icon}</Box>
          <Box className={classes.body_slide}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                color="secondary"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" align="center" color="secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default RightSide;