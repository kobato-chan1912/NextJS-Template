import React from "react";
import Head from "next/head";
import CarouselBanner from "components/CarouselBanner";
import CategoryMenu from "components/CategoryMenu";
import ProductMenu from "components/ProductMenu";
import { Box, Button, CardContent, Grid, Typography } from "@material-ui/core";
import ExampleMenu from "components/ExampleMenu";
import ExamplePost from "components/ExamplePost";
import TextFieldWhite from "components/TextFieldWhite";
import CardHoverShowAnimation from "components/CardHoverShowAnimation";
import ExampleEmail from "components/ExampleEmail";

const ResultSearch = ({
  title,
  productCategories,
  products,
  projectCategories,
  projects,
  postCategories,
  posts,
  banners,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Kết quả tìm kiếm : <b>ABC.XYZ</b></Typography>
          </Grid>
          <Grid item xs={12}>
            <ProductMenu products={products || []} />
          </Grid>
          <Grid item xs={12}>
            <ExamplePost posts={posts || []} />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default ResultSearch;
