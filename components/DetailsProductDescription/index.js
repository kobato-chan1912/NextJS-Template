import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function DetailsProductDescription() {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Mô tả chi tiết</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info">Combo trải nghiệm ưu đãi siêu hấp dẫn.</Alert>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                alt="image"
                width="100%"
                height="auto"
              />
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                alt="image"
                width="100%"
                height="auto"
              />
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                alt="image"
                width="100%"
                height="auto"
              />
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
          <ul>
            <li>
              {" "}
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailsProductDescription;
