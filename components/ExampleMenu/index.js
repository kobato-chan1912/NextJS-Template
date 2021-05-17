import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import CardImage from "components/CardImage";

export default function ExampleMenu() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Mẫu dự án đã làm</b>
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
            <Grid item xs={12} sm={8}>
            <CardImage props={"/images/box-1.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardImage props={"/images/box-2.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardImage props={"/images/box-3.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardImage props={"/images/box-3.jpg"} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardImage props={"/images/box-3.jpg"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
