import React from "react";
import CarouselBanner from "components/CarouselBanner";
import CategoryMenu from "components/CategoryMenu";
import ProductMenu from "components/ProductMenu";
import { Box, Grid } from "@material-ui/core";
import ExampleMenu from "components/ExampleMenu";
import ExamplePost from "components/ExamplePost";
import CardImageEmail from "components/CardImageEmail";

export default function Home() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CarouselBanner />
        </Grid>
        <Grid item xs={12}>
          <CategoryMenu />
        </Grid>
        <Grid item xs={12}>
          <ProductMenu />
        </Grid>
        <Grid item xs={12}>
          <ExampleMenu />
        </Grid>
        <Grid item xs={12}>
          <ExamplePost />
        </Grid>
        <Grid item xs={12}>
          <Box mt={8}>
            <CardImageEmail props={"/images/box-3.jpg"} />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
