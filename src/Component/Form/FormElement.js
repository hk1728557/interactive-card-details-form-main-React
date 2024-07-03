import React from "react";
import "./FormElement.css";

function FormElement({ 
  cardName, setCardName, 
  cardNumber, setCardNumber, 
  expMonth, setExpMonth, 
  expYear, setExpYear, 
  cvc, setCvc, 
  nameError, numberError, dateError, cvcError, validateForm 
}) {
  return (
    <div className="formgroup">
      <form id="paymentForm">
        <label className="name">Cardholder Name</label>
        <input
          id="cardName"
          className="nameinput"
          type="text"
          placeholder="e.g Jane Appleseed"
          title="please input valid name"
          required
          value={cardName}
          onChange={(e) => setCardName(e.target.value)} // Update card name
        />
        {nameError && <div id="nameError" className="error-message">{nameError}</div>} {/* Display name error */}

        <label className="number">Card Number</label>
        <input
          id="cardNumber"
          className="numberinput"
          placeholder="e.g 1234 5678 9123 0000"
          required
          maxLength="19"
          value={cardNumber}
          onChange={setCardNumber} // Use the handler from props
        />
        {numberError && <div id="numberError" className="error-message">{numberError}</div>}

        <div className="datecvc">
          <label className="number">Exp. Date (MM/YY)</label>
          <label className="cvclabel">CVC</label>
        </div>
        <div className="date">
          <input
            id="expMonth"
            className="month"
            placeholder="MM"
            required
            pattern="\d{2}"
            value={expMonth}
            onChange={(e) => setExpMonth(e.target.value)}
          />
          <input
            id="expYear"
            className="year"
            placeholder="YY"
            required
            pattern="\d{2}"
            value={expYear}
            onChange={(e) => setExpYear(e.target.value)}
          />
          <input
            id="cvc"
            className="CVC"
            placeholder="e.g 123"
            required
            pattern="\d{3}"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        {dateError && <div id="dateError" className="error-message">{dateError}</div>}
        {cvcError && <div id="cvcError" className="error-message">{cvcError}</div>}

        <button type="button" className="confirm-button" onClick={validateForm}>Confirm</button>
      </form>
    </div>
  );
}

export default FormElement;
