import React from "react";

import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import TextFieldWhite from "components/TextFieldWhite";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";

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
          <CardShadowOnlyHover>
            <div style={{ position: "relative" }}>
              <CardMedia
                image={"/images/product-9.jpg"}
                style={{
                  height: "400px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  paddingTop: "10%",
                  paddingLeft: "5%",
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        style={{ color: "white", paddingLeft: ".5rem" }}
                      >
                        Stay in touch!
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        style={{ color: "white", paddingLeft: ".5rem" }}
                      >
                        Be first to know about all new interior features!{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                          <TextFieldWhite
                            label="Enter your e-mail"
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs="auto">
                          <Box pl={1}>
                            <Button
                              variant="outlined"
                              style={{
                                color: "white",
                                borderColor: "white",
                                paddingTop: "0.42rem",
                                paddingBottom: "0.42rem",
                              }}
                            >
                              <b>Subscribe now</b>
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </span>
            </div>
          </CardShadowOnlyHover>
        </Box>
      </Grid>
    </Grid>
  );
}
