import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "rgb(234, 155, 37)",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "rgb(234, 155, 37)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(234, 155, 37)",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function TextFieldWhite({ label }) {
  const classes = useStyles();

  return (
    <CssTextField
      className={classes.margin}
      id="custom-css-standard-input"
      fullWidth
      variant="outlined"
      size="small"
      label={label}
    />
  );
}
