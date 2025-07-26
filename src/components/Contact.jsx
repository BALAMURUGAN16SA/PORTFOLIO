import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

emailjs.init('3aQ5LocUj9HkkBQ3z');

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleForm = (e) => {
    e.stopPropagation();
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current && !formRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setShowForm(false);
      }
    };

    if (showForm) {
      // Add a small delay to prevent immediate closing
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showForm]);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showToastMessage('Please fill in all fields.');
      return;
    }

    emailjs
      .send('service_k5jmekb', 'template_2tl7ssj', {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(() => {
        showToastMessage('Your message has been sent!');
        form.reset();
        setShowForm(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error?.text || error);
        showToastMessage('Error sending message. Please try again.');
      });
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Container fluid className="contact-container mt-4" id="contact">
      <div className="title-bar fs-4">
        <h3 className="hhc d-flex align-items-center justify-content-center fs-4 fw-bold my-3">
          Connect With Me
        </h3>
      </div>

      <Row className="text-center align-items-center mb-3">
        <Col sm className="contact-col p-3">
          <a
            href="https://x.com/BalamuruganSr16?t=dI_yo7g1OA70TiHqKFNAZA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white d-flex align-items-center justify-content-center"
          >
            <span className="fs-6 px-3">Twitter</span>
            <img
              src="images/TW1.png"
              alt="Twitter"
              height="30"
              width="30"
              className="mt-1 mx-2"
            />
          </a>
        </Col>

        <Col sm className="contact-col p-3">
          <a
            href="https://github.com/BALAMURUGAN16SA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white d-flex align-items-center justify-content-center"
          >
            <span className="fs-6 px-3">Github</span>
            <img
              src="images/GH1.png"
              alt="Github"
              height="30"
              width="30"
              className="mt-1 mx-2"
            />
          </a>
        </Col>

        <Col sm className="contact-col p-3">
          <a
            href="https://www.linkedin.com/in/balamurugan16sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white d-flex align-items-center justify-content-center"
          >
            <span className="fs-6 px-3">LinkedIn</span>
            <img
              src="images/LI1.png"
              alt="LinkedIn"
              height="30"
              width="30"
              className="mt-1 mx-2"
            />
          </a>
        </Col>

        <Col sm className="contact-col p-3" id="msg">
          <Button
            ref={buttonRef}
            id="contact-button"
            variant="outline-success"
            aria-expanded={showForm}
            aria-controls="contact-form-container"
            className="d-flex align-items-center justify-content-center"
            onClick={toggleForm}
          >
            <span className="fs-6 px-3 text-light">Message Me</span>
            <img
              src="images/MS1.png"
              alt="Message"
              height="17"
              width="17"
              className="mt-1 mx-2"
            />
          </Button>

          {showForm && (
            <div 
              ref={formRef}
              id="contact-form-container" 
              className="mt-3"
              onClick={handleFormClick}
            >
              <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    onClick={handleFormClick}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    onClick={handleFormClick}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    onClick={handleFormClick}
                  />
                </Form.Group>

                <Button type="submit" variant="success" onClick={handleFormClick}>
                  Send
                </Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>

      <div className={`toast-message ${showToast ? 'show' : ''}`}>
        {toastMessage}
        <div className="progress-bar animate"></div>
      </div>
    </Container>
  );
};

export default Contact;
