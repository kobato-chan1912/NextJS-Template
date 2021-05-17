import React, { useState } from "react";
import { Button, Card, CardMedia, Grid } from "@material-ui/core";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";

export default function CardImage({ props }) {

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
              paddingTop: "35%",
            }}
          >
            <Grid container justify="center">
              <Grid item xs="auto">
                <Button
                  variant="outlined"
                  style={{
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  <b>Open up for easy living</b>
                </Button>
              </Grid>
            </Grid>
          </span>
        ) : null}
      </Card>
    </CardShadowOnlyHover>
  );
}
