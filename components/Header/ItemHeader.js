import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const bounceStyles = makeStyles((theme) => ({
  bounce: {
    position: "fixed",
    "&:hover": {
      opacity: 1,
      transition: `${theme.transitions.duration.shorter}ms`,
      "&  > ul": {
        display: "block",
      },
      "&  > button": {
        backgroundColor: "#405a77",
        color: "white",
        transition: `.5s`,
        borderRadius: "0px",
      },
    },
    "& > ul": {
      cursor: "pointer",
      listStyleType: "decimal",
      display: "none",
      width: 350,
      maxWidth: 350,
      padding: theme.spacing(1),
      wordBreak: "break-word",
      backgroundColor: "#405a77",
      color: "white",
      boxShadow: theme.shadows[3],
      position: "absolute",
      top: "20px",

      maxHeight: 500,
      overflowY: "auto",
    },
  },
  button: {
    "&:hover": {
      // transform: 'rotate(180deg)',
      backgroundColor: "red",
      color: "white",
      transition: `.5s`,
    },
  },
}));

export default function ItemHeader({ label, content }) {
  const classes = bounceStyles();
  return (
    <div className={classes.bounce}>
      <Button fullWidth id="button" className={classes.button}>
        {label}
      </Button>
      <ul>{content}</ul>
    </div>
  );
}
ItemHeader.propTypes = {
  label: PropTypes.any,
  content: PropTypes.any,
};
