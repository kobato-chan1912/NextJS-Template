import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import Image from "next/image";

const styleTypo = { cursor: "pointer", color: "#666666", paddingTop: "16px" };

export default function Footer() {
  return (
    <Card style={{ backgroundColor: "#F5F4EF" }}>
      <CardContent>
        <Box textAlign="center" my={2}>
          <Image
            src="/images/divanoLogo.svg"
            alt="Picture of Logo"
            width={150}
            height={34}
          ></Image>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Typography style={{ color: "#2a3c4f" }} variant="h6">
                    <b>Browse by</b>
                  </Typography>
                  <Typography style={styleTypo}>Brand</Typography>
                  <Typography style={styleTypo}>Product</Typography>
                  <Typography style={styleTypo}>Category</Typography>
                  <Typography style={styleTypo}>Projects</Typography>
                  <Typography style={styleTypo}>Sales</Typography>
                </Grid>
                <Grid item xs>
                  <Typography style={{ color: "#2a3c4f" }} variant="h6">
                    <b>Quick links</b>
                  </Typography>
                  <Typography style={styleTypo}>In-Store Pickup</Typography>
                  <Typography style={styleTypo}>Gift Cards</Typography>
                  <Typography style={styleTypo}>Afterpay</Typography>
                  <Typography style={styleTypo}>Shop</Typography>
                  <Typography style={styleTypo}>FAQ</Typography>
                </Grid>
                <Grid item xs>
                  <Typography style={{ color: "#2a3c4f" }} variant="h6">
                    <b>Order info</b>
                  </Typography>
                  <Typography style={styleTypo}>Order Status</Typography>
                  <Typography style={styleTypo}>Payments</Typography>
                  <Typography style={styleTypo}>Shipping</Typography>
                  <Typography style={styleTypo}>Returns</Typography>
                  <Typography style={styleTypo}>Order history</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography style={{ color: "#2a3c4f" }} variant="h6">
                Sign up for our newsletter
              </Typography>
              <Typography style={styleTypo}>
                <i>
                  Add your email address to sign up for our monthly emails and
                  to receive promotional offers.
                </i>
              </Typography>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs="auto">
                <Typography style={styleTypo} component={Link}>
                  Download Divano Template&ensp;|
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Typography style={styleTypo} component={Link}>
                  Sitemap&ensp;|
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Typography style={styleTypo} component={Link}>
                  Privacy policy
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
