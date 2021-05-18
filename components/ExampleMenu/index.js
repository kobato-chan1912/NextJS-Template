import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import CardHoverShowAnimation from "components/CardHoverShowAnimation";

export default function ExampleMenu({ projects }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Mẫu dự án đã làm</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography color="textSecondary">
                Create an inviting space for yourself and family.
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography color="textSecondary">Xem tất cả</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {projects.map((e, i) => (<Grid item xs={12} sm={i === 0 ? 8 : 4} key={`exampleMenu-${e.id}`} >
              <CardHoverShowAnimation
                key={`exampleMenu-${e.id}`}
                image={e.image_url}
                content={
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
                }
              />
            </Grid>))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
