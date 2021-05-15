import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/Home.module.css";
import { ExampleComponent } from "@components";
import Header from "components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <h1
          onClick={() => {
            router.push("/home");
          }}
        >
          HELLO WORLD
        </h1>
        <ExampleComponent />
      </div>
    </React.Fragment>
  );
}
