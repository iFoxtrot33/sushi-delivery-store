import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😢</span>
        <br />
        Nothing was found
      </h1>
      <p className={styles.description}>
        Unfortunatelly we do not have this page
      </p>
    </div>
  );
}

export default NotFoundBlock;
