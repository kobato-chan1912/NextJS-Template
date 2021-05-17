import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    borderColor: "white",
  },
  input: {
    color: "white",
    borderColor: "white",
  },
};

function TextFieldWhite(props) {
  const { classes } = props;

  return (
    <TextField
      defaultValue="Enter your e-mail"
      className={classes.root}
      InputProps={{
        className: classes.input,
      }}
      {...props}
    />
  );
}

TextFieldWhite.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldWhite);
