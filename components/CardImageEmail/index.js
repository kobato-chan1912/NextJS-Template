import React, { useState } from "react";
import { Button, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";
import TextFieldWhite from "components/TextFieldWhite";

export default function CardImageEmail({ props }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <CardShadowOnlyHover>
      <Card
        variant="outlined"
        style={{ position: "relative" }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardMedia
          image={props}
          style={{
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        {isShown ? (
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              paddingTop: "10%",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" style={{ color: "white" }}>
                  <b>Stay in touch!</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ color: "white" }}>
                  <b>Be first to know about all new interior features!</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={6}>
                    <TextFieldWhite />
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
          </span>
        ) : null}
      </Card>
    </CardShadowOnlyHover>
  );
}
