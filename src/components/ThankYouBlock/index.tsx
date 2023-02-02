import React from "react";
import styles from "./ThankYouBlock.module.scss";

const ThankYouBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <br />
        Thank you for testing my website
      </h1>
      <p className={styles.description}>
        This is a pet project and unfortunatelly I'm not able to deliver your
        order
      </p>
    </div>
  );
};

export default ThankYouBlock;
