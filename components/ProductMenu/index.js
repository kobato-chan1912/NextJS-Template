import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import ProductItem from "./ProductItem";

export default function ProductMenu() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Sản phẩm phổ biến</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography color="textSecondary">
                Find your perfect match.
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
              <ProductItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductItem />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
