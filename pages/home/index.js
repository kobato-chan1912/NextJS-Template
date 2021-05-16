import React from "react";
import CarouselBanner from "components/CarouselBanner";
import CategoryMenu from "components/CategoryMenu";
import ProductMenu from "components/ProductMenu";
import { Grid } from "@material-ui/core";

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
      </Grid>
    </React.Fragment>
  );
}
