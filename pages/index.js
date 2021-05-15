import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/Home.module.css";
import { ExampleComponent } from "@components";
import Header from "components/Header";
import { Grid } from "@material-ui/core";

export default function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <h1
              onClick={() => {
                router.push("/home");
              }}
            >
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLDHELLO WORLDHELLO
              WORLDHELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              HELLO WORLD HELLO WORLD HELLO WORLDHELLO WORLDHELLO WORLDHELLO
              WORLDHELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO
              WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD HELLO WORLD
              <br />
              <br />
              HELLO WORLD HELLO WORLD HELLO WORLD
            </h1>
            <ExampleComponent />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
