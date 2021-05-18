import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import { Box, Grid } from "@material-ui/core";
import Home from "./home";
import { get } from "@util";

export default function Index({ title, content }) {
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", zIndex: "999", width: "100%" }}>
          <Header {...content} />
        </div>
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Box px={2}>
              <Home title={title} {...content} />
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
  ] = await Promise.all([
    get({ url: "//products/categories?limit=3" }),
    get({ url: "/products?limit=3" }),
    get({ url: "//projects/categories?limit=3" }),
    get({ url: "/projects?limit=3" }),
    get({ url: "//posts/categories?limit=3" }),
    get({ url: "/posts?limit=3" }),
  ]);
  return {
    props: {
      title: "Trang chủ",
      content: {
        productCategories,
        products,
        projectCategories,
        projects,
        postCategories,
        posts,
      },
    },
  };
}
