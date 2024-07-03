import React, { useState } from "react";
import "./Background.css";
import "./card.css";
import CardLogo from "../Images/cardlogo.svg";
import FormElement from "../Form/FormElement";
import Thanks from "../Thanks/Thanks";

function Background() {
  // declear the State variables for form inputs set the react usestate method
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  // declear the State variables for validation error messages set the react usestate method
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");

  // declear the State variable to check if form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // write the Function to format card number with spaces every 4 digits
  const formatCardNumber = (number) => {
    return number
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  // write the Function Handler for card number input change
  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatCardNumber(input);
    setCardNumber(formattedInput);
  };

  // write the Function to validate form inputs
  const validateForm = () => {
    let valid = true;

    // check card holder name valid or not
    if (!cardName) {
      setNameError("Name cannot be empty");
      valid = false;
    } else {
      setNameError("");
    }

    // check card number (must be 16 digits) valid or not
    const cardNumberDigit = /^\d{16}$/;
    if (!cardNumberDigit.test(cardNumber.replace(/\s+/g, ""))) {
      setNumberError("Card number must be 16 digits");
      valid = false;
    } else {
      setNumberError("");
    }

    // check expiry month and year (must be 2 digits each) valid or not
    const monthExp = /^\d{2}$/;
    const yearExp = /^\d{2}$/;
    if (!monthExp.test(expMonth) || !yearExp.test(expYear)) {
      setDateError("Invalid date format");
      valid = false;
    } else {
      setDateError("");
    }
    // check CVC (must be 3 digits) valid or not
    const cvcDigit = /^\d{3}$/;
    if (!cvcDigit.test(cvc)) {
      setCvcError("CVC must be 3 digits");
      valid = false;
    } else {
      setCvcError("");
    }

    // If all validations pass, set form as submitted
    if (valid) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <div className="column column-1"></div>
      <div className="column column-2">
        {isSubmitted ? (
          <Thanks />
        ) : (
          <FormElement
            cardName={cardName}
            setCardName={setCardName}
            cardNumber={cardNumber}
            setCardNumber={handleCardNumberChange} // Use the custom handler for card number input
            expMonth={expMonth}
            setExpMonth={setExpMonth}
            expYear={expYear}
            setExpYear={setExpYear}
            cvc={cvc}
            setCvc={setCvc}
            nameError={nameError}
            numberError={numberError}
            dateError={dateError}
            cvcError={cvcError}
            validateForm={validateForm}
          />
        )}
      </div>
      <div className="cardBack">
        <div className="cvc-display" id="cvc">
          {cvc || "123"}
        </div>
      </div>
      <div className="cardFront">
        <img src={CardLogo} alt="cardLogo" />
        <div className="card-number">
          {cardNumber || "0000 0000 0000 0000"}
        </div>{" "}
        {/* Display formatted card number */}
        <div className="card-details">
          <div className="card-holder">{cardName || "Jane Appleseed"}</div>
          <div className="expiry-date">
            {(expMonth || "00") + "/" + (expYear || "00")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
