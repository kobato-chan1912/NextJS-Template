import React from "react";

import { Box, Button, CardContent, Grid, Typography } from "@material-ui/core";

import TextFieldWhite from "components/TextFieldWhite";
import CardHoverShowAnimation from "components/CardHoverShowAnimation";

export default function ExampleEmail() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          <b>Hãy liên hệ với chúng tôi</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <CardHoverShowAnimation
            image={"/images/box-3.jpg"}
            content={
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      style={{ color: "white", paddingLeft: ".5rem" }}
                    >
                      <b>Stay in touch!</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      style={{ color: "white", paddingLeft: ".5rem" }}
                    >
                      <b>Be first to know about all new interior features!</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={4}>
                        <TextFieldWhite
                          label="Enter your e-mail"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          variant="outlined"
                          style={{
                            color: "white",
                            borderColor: "white",
                          }}
                        >
                          <b>Subscribe now</b>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
}
