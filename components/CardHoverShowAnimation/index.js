import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";

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
    "&:hover": {
      opacity: 0.9,
      // transform: 'scale(1.5,1.5)',
      boxShadow: `0px 3px 20px 0px rgba(44, 101, 144, 0.3)`,
      "& > div": {
        height: "65%",
        transition: "all 2s ease",
        color: "white",
      },
    },
  },
}));

/* Hiển thị card image content hover animation */
export default function CardHoverShowAnimation({ image, content }) {
  const classes = cardStyles();

  return (
    <Card variant="outlined" className={classes.styleCard}>
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
        }}
      />
      <div>{content}</div>
    </Card>
  );
}

CardHoverShowAnimation.propTypes = {
  image: PropTypes.any,
  content: PropTypes.any,
};
