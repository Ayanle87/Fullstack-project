import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ContactSeller() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  };

  const handleShow = () => {
    setShow(true);

  }

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Button variant="primary" id="knappStyle"onClick={handleShow}>
        Kontakta säljare!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kontakta säljare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!submitted ? (
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Hur vill du bli kontaktad?</Form.Label>
                <Form.Label>Epost, telefon, etc.</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="....."
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Meddelande</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          ) : (
            <p>
              Tack för ditt meddelande! Du kommer att bli kontaktad av säljaren snart.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!submitted ? (
            <Button variant="secondary" onClick={handleClose}>
              Stäng
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              OK
            </Button>
          )}
          {!submitted && (
            <Button variant="primary" onClick={handleSubmit}>
              <img src="ux ikoner/bankid.png" className="bankid" alt="BankID" />
              Skicka
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactSeller;
