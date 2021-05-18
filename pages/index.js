import React, { useEffect } from "react";
import Header from "components/Header";
import { Box, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline"
import Home from "./home";
import { get } from "@util";
import Footer from "components/Footer";
import Detail from "./detail";

export default function Index({ title, content }) {

  const { productCategories, projectCategories, postCategories } = content

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", zIndex: "999", width: "100%" }}>
          <Header {...{ productCategories, projectCategories, postCategories }} />
        </div>
        <CssBaseline />
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Box px={2}>
              <Home title={title} {...content} />
              <Detail />
            </Box>
            <Box my={8}>
              <Footer />
            </Box>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const [
    { data: productCategories },
    { data: products },
    { data: projectCategories },
    { data: projects },
    { data: postCategories },
    { data: posts },
    { data: banners },
  ] = await Promise.all([
    get({ url: "/products/categories" }),
    get({ url: "/products?limit=6" }),
    get({ url: "/projects/categories?limit=3" }),
    get({ url: "/projects?limit=5" }),
    get({ url: "/posts/categories?limit=3" }),
    get({ url: "/posts?limit=3" }),
    get({ url: "/banners" }),
  ]);
  return {
    props: {
      title: "Trang chủ",
      content: {
        productCategories: productCategories || [],
        products: products || [],
        projectCategories: projectCategories || [],
        projects: projects || [],
        postCategories: postCategories || [],
        posts: posts || [],
        banners: banners || [],
      },
    },
  };
}
