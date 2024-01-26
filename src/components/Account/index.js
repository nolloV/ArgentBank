import React from "react";
import "./account.css";

const Account = ({ title, amount, description, buttonText }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">{buttonText}</button>
    </div>
  </section>
);

export default Account;
