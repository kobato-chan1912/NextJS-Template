import React from "react";
import { Box, CardMedia, Divider, Grid, Typography } from "@material-ui/core";
import { getDateTimeArray } from "@util";

import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles(() => ({
  styleCard: {
    cursor: "pointer",
    position: "relative",
    transition: "all 1s ease",
    "& #image": {
      cursor: "pointer",
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    "&:hover": {
      opacity: 0.8,
      boxShadow: `0px 3px 20px 0px rgba(44, 101, 144, 0.3)`,
      transition: "all 1s ease",
      transform: "translateY(-10px)",
    },
  },
}));
export default function CardImageContent({ data }) {
  const classes = cardStyles();

  const { cover_img, created_at, title, name_category } = data;
  const date = getDateTimeArray(created_at);
  return (
    <>
      <div className={classes.styleCard}>
        <CardMedia image={cover_img} id="image" />
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Typography align="center">{date.month}</Typography>
              <Typography align="center">
                <b>{date.day}</b>
              </Typography>
              <Typography align="center">{date.year}</Typography>
            </Grid>
            <Grid item xs="auto">
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
                <b>{title}</b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
