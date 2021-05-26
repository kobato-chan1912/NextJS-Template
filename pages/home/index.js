import React from "react";
import Head from "next/head";
import CarouselBanner from "components/CarouselBanner";
import CategoryMenu from "components/CategoryMenu";
import ProductMenu from "components/ProductMenu";
import { Box, createMuiTheme, Grid } from "@material-ui/core";
import ExampleMenu from "components/ExampleMenu";
import ExamplePost from "components/ExamplePost";

import ExampleEmail from "components/ExampleEmail";
import Header from "components/Header";
import Footer from "components/Footer";

import { makeStyles } from "@material-ui/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  styleBox: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(20),
    },
  },
  styleBoxDescription: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
    },
  },
}));

const Home = ({
  title,
  productCategories,
  products,
  projectCategories,
  projects,
  postCategories,
  posts,
  banners,
}) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", zIndex: "999", width: "100%" }}>
          <Header />
        </div>
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Box px={2} className={classes.styleBox}>
              <Head>
                <title>{title}</title>
              </Head>
              <React.Fragment>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <CarouselBanner banners={banners || []} />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <CategoryMenu
                        productCategories={productCategories || []}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <ProductMenu products={products || []} />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <ExampleMenu projects={projects || []} />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <ExamplePost posts={posts || []} />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={classes.styleBoxDescription}>
                      <ExampleEmail />
                    </Box>
                  </Grid>
                </Grid>
              </React.Fragment>
            </Box>
            <Box my={8}>
              <Footer />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
