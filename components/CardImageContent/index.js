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

export default function CardImageContent({ props }) {
  return (
    <CardShadowOnlyHover>
      <Card variant="outlined" style={{ position: "relative" }}>
        <CardMedia
          image={props}
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
                <Typography align="center">Sep</Typography>
                <Typography align="center">
                  <b>08</b>
                </Typography>
                <Typography align="center">2019</Typography>
              </Grid>
              <Grid item xs="auto">
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs>
                <Typography variant="h6">
                  <b>Home Organizers that Add Color to Your Space</b>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </span>
      </Card>
    </CardShadowOnlyHover>
  );
}
