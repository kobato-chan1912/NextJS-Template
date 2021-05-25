import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles(() => ({
  styleCard: {
    cursor: "pointer",
    position: "relative",
    transition: "all 1s ease",
    "& #span1": {
      position: "absolute",
      cursor: 'pointer',
      top: 0,
      left: 0,
      marginTop: "5%",
      marginLeft: "5%",
      backgroundColor: "#efb700",
      color: "white",
      padding: "4px",
      borderRadius: "4px",
      transform: "scale(0,0)",
    },
    "& #span2": {
      position: "absolute",
      cursor: 'pointer',
      top: 0,
      right: 0,
      marginTop: "5%",
      marginRight: "5%",
      backgroundColor: "#000000",
      opacity: "0.6",
      color: "white",
      padding: "4px",
      borderRadius: "100%",
      display: "flex",
      alignItems: "center",
      transform: "scale(0,0)",

    },
    "& #span3": {
      position: "absolute",
    cursor: 'pointer',
    top: 0,
    right: 0,
    marginTop: "15%",
    marginRight: "5%",
    backgroundColor: "#000000",
    opacity: "0.6",
    color: "white",
    padding: "4px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    transform: "scale(0,0)",

    },
    "& #div1": {
      position: "absolute",
      transform: "scale(0,0)",
      bottom: "7rem",
      left: "10rem",
    },
    "&:hover": {
      opacity: 0.8,
      boxShadow: `0px 3px 20px 0px rgba(44, 101, 144, 0.3)`,
      "& #span1": {
        // height: "65%",
        transition: "all 1s ease",
        color: "white",
        transform: "scale(1,1)",
      },
      "& #span2": {
        // height: "65%",
        transition: "all 1s ease",
        color: "white",
        transform: "scale(1,1)",
      },
      "& #span3": {
        // height: "65%",
        transition: "all 1s ease",
        color: "white",
        transform: "scale(1,1)",
      },
    },
  },
}));

/* Hiển thị card image content hover animation */
export default function CardHoverShowAnimationProduct({
  image,
  span1,
  span2,
  span3,
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
      <span id="span1">{span1}</span>
      <span id="span2">{span2}</span>
      <span id="span3">{span3}</span>
      <div>{content}</div>
    </div>
  );
}

CardHoverShowAnimationProduct.propTypes = {
  image: PropTypes.any,
  span1: PropTypes.any,
  span2: PropTypes.any,
  span3: PropTypes.any,
  content: PropTypes.any,
};
