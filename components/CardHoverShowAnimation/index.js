import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles(() => ({
  styleCard: {
    cursor: "pointer",
    position: "relative",
    transition: "all 2s ease",
    "& > div": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 0,
      overflow: "hidden",
    },
    "& #image1": {
      transform: "scale(1,1)",
      width: "100%",
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      borderRadius: "4px",
    },
    "&:hover": {
      opacity: 0.6,
      // transform: 'scale(1.5,1.5)',
      "& > div": {
        height: "55%",
        transition: "all 2s ease",
        color: "white",
      },
      "& #image1": {
        transition: "all 2s ease",
        transform: "scale(1.04,1.04)",
      },
    },
  },
}));

/* Hiển thị card image content hover animation */
export default function CardHoverShowAnimation({ image, content }) {
  const classes = cardStyles();

  return (
    <div className={classes.styleCard}>
      <img alt="123" src={image} height="100%" id="image1" />
      <div>{content}</div>
    </div>
  );
}

CardHoverShowAnimation.propTypes = {
  image: PropTypes.any,
  content: PropTypes.any,
};
