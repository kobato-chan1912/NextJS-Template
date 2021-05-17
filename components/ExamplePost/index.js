import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CardImageContent from "components/CardImageContent";

export default function ExamplePost() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Bài viết tham khảo</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography color="textSecondary">
                Create an inviting space for yourself and family.
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="textSecondary">Xem tất cả</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <CardImageContent props={"/images/product-31.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardImageContent props={"/images/product-31.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardImageContent props={"/images/product-31.jpg"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
