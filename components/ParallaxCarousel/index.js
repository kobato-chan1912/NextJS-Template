/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {
  IconButton,
  Grid,
  CardMedia,
  Button,
  createMuiTheme,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DotIndicator from "./DotIndicator";
import ParallaxSlide from "./ParallaxSlide";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: "relative",
  },
  slide: {
    perspective: 1000, // create perspective
    overflow: "hidden",
    // relative is a must if you want to create overlapping layers in children
    position: "relative",
    // paddingTop: spacing(8),
    // [breakpoints.up('sm')]: {
    //   paddingTop: spacing(10),
    // },
    // [breakpoints.up('md')]: {
    //   paddingTop: spacing(14),
    // },
  },
  imageContainer: {
    display: "block",
    position: "relative",
    zIndex: 2,
    paddingBottom: "80.25%",
  },
  image: {
    display: "block",
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // marginLeft: '12%',
    // [breakpoints.up('sm')]: {
    //   marginLeft: '4%',
    // },
  },
  arrow: {
    display: "none",
    position: "absolute",
    top: "40%",
    transform: "translateY(-50%)",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },
  },
  arrowLeft: {
    left: 0,
    color: "rgb(234, 155, 37)",
  },
  arrowRight: {
    right: 0,
    color: "rgb(234, 155, 37)",
  },
  //   text: {
  //     // shared style for text-top and text-bottom
  //     fontFamily: 'Poppins, san-serif',
  //     fontWeight: 900,
  //     position: 'absolute',
  //     color: palette.common.white,
  //     padding: '0 8px',
  //     transform: 'rotateY(45deg)',
  //     lineHeight: 1.2,
  //     [breakpoints.up('sm')]: {
  //       padding: '0 16px',
  //     },
  //     [breakpoints.up('md')]: {
  //       padding: '0 24px',
  //     },
  //   },
  //   title: {
  //     top: 20,
  //     left: '20%',
  //     height: '40%',
  //     fontSize: 40,
  //     zIndex: 1,
  //     background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
  //     [breakpoints.up('sm')]: {
  //       top: 40,
  //       fontSize: 72,
  //     },
  //     [breakpoints.up('md')]: {
  //       top: 52,
  //       fontSize: 72,
  //     },
  //   },
  //   subtitle: {
  //     top: 60,
  //     left: '0%',
  //     height: '52%',
  //     fontSize: 56,
  //     zIndex: 2,
  //     background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
  //     [breakpoints.up('sm')]: {
  //       top: 112,
  //       left: '6%',
  //       fontSize: 96,
  //     },
  //     [breakpoints.up('md')]: {
  //       top: 128,
  //       fontSize: 104,
  //     },
  //   },
  indicatorContainer: {
    textAlign: "center",
  },
}));

const ParallaxCarousel = ({ data }) => {
  const classes = useStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      <IconButton
        className={cx(classes.arrow, classes.arrowLeft)}
        size="large"
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        className={cx(classes.arrow, classes.arrowRight)}
        size="large"
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Dot */}
      {/* <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div> */}

      {/* Image */}
      <div className={classes.indicatorContainer}>
        <Grid container spacing={2}>
          {data.map(({ id, image }, i) => (
            <Grid item xs="auto" key={id}>
              <CardMedia
                component={Button}
                image={image}
                active={i === index}
                onClick={() => onChangeIndex(i)}
                style={{ width: "100px", height: "100px", cursor: "pointer" }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        {/* <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography> */}
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt="slide" />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

ParallaxCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
ParallaxCarousel.defaultProps = {
  data: [],
};

export default ParallaxCarousel;
