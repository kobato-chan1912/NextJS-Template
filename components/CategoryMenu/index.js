import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CategoryItem from "./CategoryItem";

export default function CategoryMenu({ products }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Thể loại sản phẩm</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography color="textSecondary">
                We just keep things minimal.
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="textSecondary">Xem thêm</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {(products || []).map((e) => (
              <Grid item xs={12} sm={6} md={4}>
                <CategoryItem data={e} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
