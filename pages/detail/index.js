import React from "react";
import { Box, createMuiTheme, Grid } from "@material-ui/core";
import DetailsProductDescription from "components/DetailsProductDescription";
import DetailsProductInfo from "components/DetailsProductInfo";
import Footer from "components/Footer";
import Header from "components/Header";
import ParallaxCarousel from "components/ParallaxCarousel";
import ProductMenu from "components/ProductMenu";
import { makeStyles } from "@material-ui/styles";
import ExampleEmail from "components/ExampleEmail";

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
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function Detail() {
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
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <ParallaxCarousel data={data} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DetailsProductInfo />
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.styleBoxDescription}>
                    <DetailsProductDescription />
                  </Box>
                </Grid>
                {/* Em call data rui` show ra nha! */}
                <Grid item xs={12}>
                  <Box className={classes.styleBoxDescription}>
                    <ProductMenu products={[]} />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.styleBoxDescription}>
                    <ExampleEmail />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box my={8}>
              <Footer />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
