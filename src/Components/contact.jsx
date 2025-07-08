import { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated'); // Apply animation class
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    // Select elements
    const contactForm = document.querySelector('.contact-form-col');
    const contactImage = document.querySelector('.contact-image-col');

    if (contactForm) observer.observe(contactForm);
    if (contactImage) observer.observe(contactImage);

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={6} className="contact-image-col fade-in-up">
          <img
            src="contact.jpg" // Replace with your image path
            alt="Contact Us"
            className="img-fluid"
          />
        </Col>

        {/* Right Side - Contact Form */}
        <Col md={6} className="contact-form-col fade-in-up">
          <div className="contact-form">
            <h1 className="mb-4">Contact Us</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <Button type="submit" className="w-100"style={{backgroundColor:"#272262"}}>
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
