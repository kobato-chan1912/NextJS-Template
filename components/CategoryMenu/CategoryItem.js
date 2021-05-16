import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

export default function CategoryItem() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card
      variant="outlined"
      style={{ position: "relative" }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <CardMedia
        image="/images/product-5.jpg"
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
                <b>2020 COLLECTION</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "white" }}
              >
                <b>Beedroms</b>
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
  );
}
