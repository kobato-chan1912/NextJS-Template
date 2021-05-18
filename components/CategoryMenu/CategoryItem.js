import React, { useState } from "react";
import { Button, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import CardShadowOnlyHover from "components/CardShadowOnlyHover";

export default function CategoryItem({ data }) {
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
          image={data.image_url}
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
              paddingTop: "20%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ color: "white" }}
                >
                  <b>{data.name_category}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  style={{ color: "white" }}
                >
                  <b>{data.name_product}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ color: "white" }}
                >
                  Top picks four your desire
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs="auto">
                    <Button
                      variant="outlined"
                      style={{
                        color: "white",
                        borderColor: "white",
                      }}
                    >
                      <b>Shop now</b>
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
