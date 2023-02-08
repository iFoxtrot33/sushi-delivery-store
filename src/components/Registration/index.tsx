import React from "react";
import { Link } from "react-router-dom";
import styles from "./Registration.module.scss";

const Registration: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [nameResult, setNameResult] = React.useState(false);
  const [emailResult, setEmailResult] = React.useState(false);
  const [phoneResult, setPhoneResult] = React.useState(false);
  const [adressResult, setAdressResult] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [adressError, setAdressError] = React.useState("");

  const nameHandler = (e: any): void => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Invalid name");
    } else {
      setNameError("");
    }
  };

  const emailHandler = (e: any): void => {
    const EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e.target.value);
    if (!EMAIL_REGEX.test(e.target.value)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const phoneHandler = (e: any): void => {
    const MOBILE_PHONE_REGEX: RegExp = /^(?:\+\d{1,3}|\d{1})\d{10}$/;
    setPhone(e.target.value);
    if (!MOBILE_PHONE_REGEX.test(e.target.value)) {
      setPhoneError("Invalid mobile phone");
    } else {
      setPhoneError("");
    }
  };

  const adressHandler = (e: any): void => {
    setAdress(e.target.value);
    if (e.target.value.length < 5) {
      setAdressError("Invalid adress");
    } else {
      setAdressError("");
    }
  };

  const bluerHandler = (e: any): void => {
    switch (e.target.name) {
      case "name":
        setNameResult(true);
        console.log("hi");
        break;
      case "email":
        setEmailResult(true);
        break;
      case "phone":
        setPhoneResult(true);
        break;
      case "adress":
        setAdressResult(true);
        break;
    }
  };

  return (
    <>
      <div className={styles.root}>
        <h2 className="content__title">Enter your data</h2>
        {nameResult && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <label id="name-label">
          Name{" "}
          <input
            onChange={(e) => nameHandler(e)}
            value={name}
            onBlur={(e) => bluerHandler(e)}
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            id="name"
          />
        </label>
        {emailResult && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <label id="email-label">
          Email{" "}
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => bluerHandler(e)}
            name="email"
            type="email"
            required
            placeholder="Enter your Email"
            id="email"
          />
        </label>
        {phoneResult && phoneError && (
          <div style={{ color: "red" }}>{phoneError}</div>
        )}
        <label id="phone-label">
          Phone{" "}
          <input
            onChange={(e) => phoneHandler(e)}
            value={phone}
            onBlur={(e) => bluerHandler(e)}
            type="text"
            name="phone"
            required
            placeholder="Enter your Phone"
          />
        </label>
        {adressResult && adressError && (
          <div style={{ color: "red" }}>{adressError}</div>
        )}
        <label id="adress-label">
          Adress{" "}
          <input
            onChange={(e) => adressHandler(e)}
            value={adress}
            onBlur={(e) => bluerHandler(e)}
            type="text"
            name="adress"
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
          <button
            disabled={
              nameResult && emailResult && adressResult && phoneResult
                ? false
                : true
            }
          >
            Proceed to payment
          </button>
        </Link>
      </div>
    </>
  );
};

export default Registration;
