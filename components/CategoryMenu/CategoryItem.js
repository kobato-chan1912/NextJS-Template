import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";
import CardHoverShowAnimation from "components/CardHoverShowAnimation";

export default function CategoryItem({ data }) {
  return (
    <CardShadowOnlyHover>
      <CardHoverShowAnimation
        image={data.image_url}
        content={
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
              >
                <b>{data.name_category}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "white" }}
              >
                <b>{data.name_product}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
              >
                Top picks four your desire
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item xs="auto">
                  <Button
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    <b>Shop now</b>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      />
    </CardShadowOnlyHover>
  );
}
