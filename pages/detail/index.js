import { Grid } from "@material-ui/core";
import DetailsProductImage from "components/DetailsProductImage";
import DetailsProductInfo from "components/DetailsProductInfo";

import React from "react";

export default function Detail() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <DetailsProductImage />
        </Grid>
        <Grid item xs={12} md={6}>
          <DetailsProductInfo />
        </Grid>
      </Grid>
    </>
  );
}
