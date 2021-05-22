import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";
import CardHoverShowAnimationCategory from "components/CardHoverShowAnimationCategory";

export default function CategoryItem({ data }) {
  const { name_product_category, image_url } = data;
  return (
    <CardShadowOnlyHover>
      <CardHoverShowAnimationCategory
        image={image_url}
        span={
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
              >
                <b>{name_product_category}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "white" }}
              >
                <b>Tên sản phẩm</b>
              </Typography>
            </Grid>
          </Grid>
        }
        spanDescription={
          <Typography variant="h6" align="center" style={{ color: "white" }}>
            Top picks four your desire
          </Typography>
        }
        content={
          <Button
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
            }}
          >
            <b>Shop now</b>
          </Button>
        }
      />
    </CardShadowOnlyHover>
  );
}
