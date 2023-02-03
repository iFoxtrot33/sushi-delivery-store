import React from "react";
import { Link } from "react-router-dom";
import styles from "./Registration.module.scss";

const Registration: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <h2 className="content__title">Enter your data</h2>
        <label id="name-label">
          Name{" "}
          <input
            type="text"
            name="first-name"
            required
            placeholder="Enter your name"
            id="name"
          />
        </label>
        <label id="email-label">
          Email{" "}
          <input
            type="email"
            required
            placeholder="Enter your Email"
            id="email"
          />
        </label>
        <label id="phone-label">
          Phone{" "}
          <input
            type="phone"
            name="first-name"
            required
            placeholder="Enter your Phone"
          />
        </label>
        <label id="adress-label">
          Adress{" "}
          <input
            type="email"
            name="first-name"
            required
            placeholder="Enter your Adress"
          />
        </label>
      </div>
      <div className={styles.buttons}>
        <Link to="/" className="button button--black inner-btn">
          <span>Go Back</span>
        </Link>
        <Link to="/thank" className="button pay-btn">
          <span>Proceed to payment</span>
        </Link>
      </div>
    </>
  );
};

export default Registration;
