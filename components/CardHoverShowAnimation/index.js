import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles(() => ({
  styleCard: {
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    width: "100%",
    height: "400px",
    backgroundColor: "#000000",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
    transition: "all 2s ease",

    "& #styleDivContent": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 0,
      overflow: "hidden",
    },

    "& #image1": {
      width: "100%",
      verticalAlign: "top",
      transition: "all 2s ease",
      transition: "all 2s ease",
    },
    "&:hover": {
      opacity: 0.6,
      // transform: 'scale(1.5,1.5)',
      "& #styleDivContent": {
        height: "55%",
        transition: "all 2s ease",
        color: "white",
      },
      "& #image1": {
        transition: "all 2s ease",
        transform: "scale(1.3,1.3)",
      },
    },
  },
}));

/* Hiển thị card image content hover animation */
export default function CardHoverShowAnimation({ image, content }) {
  const classes = cardStyles();

  return (
    <div id="styleDiv" className={classes.styleCard}>
      <img alt="123" src={image} height="100%" id="image1" />
      <div id="styleDivContent">{content}</div>
    </div>
  );
}

CardHoverShowAnimation.propTypes = {
  image: PropTypes.any,
  content: PropTypes.any,
};
