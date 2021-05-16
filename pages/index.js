import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import { Box, Grid } from "@material-ui/core";
import Home from "./home";

export default function Index() {
  const router = useRouter();

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", zIndex: "999", width: "100%" }}>
          <Header />
        </div>
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Box px={2}>
              <Home />
            </Box>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
