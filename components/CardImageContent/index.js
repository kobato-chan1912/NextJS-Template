import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

import CardShadowOnlyHover from "components/CardShadowOnlyHover";
import { getDateTimeArray } from "@util";

export default function CardImageContent({ data }) {
  const { cover_img, created_at, title, name_category } = data
  const date = getDateTimeArray(created_at)
  return (
    <CardShadowOnlyHover>
      <Card variant="outlined" style={{ position: "relative" }}>
        <CardMedia
          image={cover_img}
          style={{
            cursor: "pointer",
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <span>
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
        </span>
      </Card>
    </CardShadowOnlyHover>
  );
}
