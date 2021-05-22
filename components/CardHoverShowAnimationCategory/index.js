import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles(() => ({
  styleCard: {
    cursor: "pointer",
    position: "relative",
    transition: "all 2s ease",
    "& #span1": {
      position: "absolute",
      top: "1rem",
      left: "4rem",
    },
    "& #spanDescription": {
      position: "absolute",
      position: "absolute",
      bottom: "7rem",
      left: 0,
      width: "100%",
      height: 0,
      overflow: "hidden",
    },
    "& #div1": {
      position: "absolute",
      transform: "scale(0,0)",
      bottom: "7rem",
      left: "10rem",
    },
    "&:hover": {
      opacity: 0.7,
      "& #spanDescription": {
        height: "40%",
        transition: "all 2s ease",
        color: "white",
      },
      "& #div1": {
        // height: "65%",
        transition: "all 2s ease",
        color: "white",
        transform: "scale(1,1)",
      },
    },
  },
}));

/* Hiển thị card image content hover animation */
export default function CardHoverShowAnimationCategory({
  image,
  span,
  spanDescription,
  content,
}) {
  const classes = cardStyles();

  return (
    <div className={classes.styleCard}>
      <img
        alt="123"
        src={image}
        height="100%"
        style={{
          width: "100%",
          height: "400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      />
      <span id="span1">{span}</span>
      <span id="spanDescription">{spanDescription}</span>
      <div id="div1">{content}</div>
    </div>
  );
}

CardHoverShowAnimationCategory.propTypes = {
  image: PropTypes.any,
  span: PropTypes.any,
  spanDescription: PropTypes.any,
  content: PropTypes.any,
};
