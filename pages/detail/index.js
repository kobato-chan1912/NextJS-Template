import { Grid } from "@material-ui/core";
import DetailsProductDescription from "components/DetailsProductDescription";
import DetailsProductInfo from "components/DetailsProductInfo";
import ParallaxCarousel from "components/ParallaxCarousel";

import React from "react";

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

const Demo = () => <Box width="100%" maxWidth={840} mx="auto"></Box>;

export default function Detail() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {/* <DetailsProductImage /> */}
          <ParallaxCarousel data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DetailsProductInfo />
        </Grid>
        <Grid item xs={12}>
          <DetailsProductDescription />
        </Grid>
        {/* Em call data rui` show ra nha! */}
        {/* <Grid item xs={12}>
          <ProductMenu />
        </Grid> */}
      </Grid>
    </>
  );
}
