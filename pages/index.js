import React from "react";
import { useRouter } from "next/router";
import { ExampleComponent } from "@components";
import Header from "components/Header";
import { Box, Grid } from "@material-ui/core";

export default function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box mb={15}>
        <Header />
      </Box>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <h1
            onClick={() => {
              router.push("/home");
            }}
          >
           HELLO
          </h1>
          <ExampleComponent />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
