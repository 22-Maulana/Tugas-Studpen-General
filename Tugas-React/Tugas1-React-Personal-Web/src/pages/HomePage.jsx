import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-background.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 56px)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', 
  };

  return (
    <div style={heroStyle}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <h1 className="display-4 fw-bold">Personal Website</h1>
            <p className="lead my-4">
              Tugas 1 materi React JS Maulana Ardhiansyah Prasetyo FullStack Web Developer Group 1
            </p>
            <p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="my-2 me-2 px-4">
                Contact Me
              </Button>
              <Button as={Link} to="/team" variant="outline-light" size="lg" className="my-2 px-4">
                Meet the Team
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;