import React, { useState } from "react";

const ContactSeller: React.FC = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // setShow(false);
  };

  return (
    <>
      <button className="Btn-Seller" onClick={handleShow}>Kontakta säljare!</button>

      {show && (
        <div className="contact-container">
          <h3>Kontakta säljare</h3>

          <div className="input-container">
            {!submitted ? (
              <form className="form">
                <label>Skriv din e-post</label>
                <input
                  type="email"
                  id="contact-method"
                  placeholder="....."
                  autoFocus
                />
                <label>Meddelande</label>
                <textarea className="textarea"/>
              </form>
            ) : (
            <div>
              <p className="message">
                Ditt meddelande <br/>
                har skickats!
              </p>
                <img src="ux ikoner/yes.png"
                className="checkmark"
                alt="Green checkmark" />
                <p>Du kommer att bli kontktad via mejl av</p>
                <p className="seller-text">säljaren</p>
              </div>
            )}
          </div>

                  <div>
            {!submitted ? (
              <button className="CloseBtn" onClick={handleClose}>X</button>
            ) : (
              <button className="OK" onClick={handleClose}>Stäng</button>
            )}
            {!submitted && (
              <button className="button-bankID" onClick={handleSubmit}>

                Skicka med
                { <img
                  src="ux ikoner/bankid.png"
                  className="bankid"
                  alt="BankID"
                /> }
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSeller;
