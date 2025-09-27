// src/pages/ContactPage.jsx
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="page-full bg-custom-dark">
      <Container> 
        <Row className="justify-content-center text-center">
            <Col lg={8}>
                <h2 className="fw-bold display-5">Contact Us</h2>
                <p className="text-white-50 fs-5 mb-5">Hubungi Saya</p>
            </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control type="text" placeholder="Your Full Name" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Your Email Address" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Control as="textarea" rows={5} placeholder="Your Message" size="lg" />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;