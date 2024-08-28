import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import ModalAlertCreditCard from "./ModalAlertCreditCard";
import "./CreditCard.css";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const navigate = useNavigate();

  const handleClose = () => setModalShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !cardHolder || !expMonth || !expYear || !cvv) {
      setModalTitle("Input Error");
      setModalMessage("Please fill in all fields.");
      setModalShow(true);
      return;
    }

    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
      setModalTitle("Invalid Card Number");
      setModalMessage("Card number must be exactly 16 digits.");
      setModalShow(true);
      return;
    }

    if (!/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/.test(cardHolder)) {
      setModalTitle("Invalid Name");
      setModalMessage(
        "Card holder name must be letters only with the first letter of each word capitalized."
      );
      setModalShow(true);
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      setModalTitle("Invalid CVV");
      setModalMessage("CVV must be a number with 3 or 4 digits.");
      setModalShow(true);
      return;
    }

    setModalTitle("Success");
    setModalMessage("Credit Card Info Submitted!");
    setModalShow(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s+/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .slice(0, 19);
  };

  return (
    <div className="creditCardContainer">
      <div className="backicon">
        <Link to="/subscription">
          <IoMdArrowRoundBack className="customIconStyle" />
        </Link>
      </div>
      <div className="container555">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="cardinfo555">Card Information</h1>
          </div>
          <div className="inputBox555">
            <span>CARD NUMBER</span>
            <input
              type="text"
              maxLength="19"
              className="card-number-input555"
              value={formatCardNumber(cardNumber)}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="inputBox555">
            <span>CARD HOLDER</span>
            <input
              type="text"
              className="card-holder-input555"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>
          <div className="flexbox555">
            <div className="inputBox555">
              <span>EXPIRATION MM</span>
              <select
                className="month-input555"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              >
                <option value="" disabled>
                  month
                </option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputBox555">
              <span>EXPIRATION YY</span>
              <select
                className="year-input555"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
              >
                <option value="" disabled>
                  year
                </option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={2024 + i}>
                    {2024 + i}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputBox555">
              <span>CVV</span>
              <input
                type="text"
                maxLength="4"
                className="cvv-input555"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value="SUBMIT" className="submit-btn555" />
        </form>
      </div>
      <ModalAlertCreditCard
        show={modalShow}
        handleClose={handleClose}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
};

export default CreditCard;
