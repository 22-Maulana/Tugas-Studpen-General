import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
    { name: 'MaulanaAP', role: 'CEO & Founder', img: 'https://media.licdn.com/dms/image/v2/D5603AQEuP4E5llql-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718627139450?e=1761782400&v=beta&t=-9xd1s2xd8MSefon8RvWsFD9O0sh1ZZoCV2QtW29_a8' },
    { name: 'Ardhinsyah', role: 'Lead Developer', img: 'https://media.licdn.com/dms/image/v2/D5622AQEFOe0m9irrRQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1720421555014?e=1761782400&v=beta&t=qQoXicr5f11sw1ApZ8u2LPYZyVFy9B8W0KcYUfPsoB4' },
    { name: 'Prasetyo', role: 'UI/UX Designer', img: 'https://avatars.githubusercontent.com/u/143920987?v=4' },
];

const TeamPage = () => {
  const pageStyle = {
    backgroundColor: '#f8f9fa', 
    minHeight: 'calc(100vh - 56px)',
    display: 'flex',
    alignItems: 'center', 
    padding: '60px 0', 
  };

  return (
    <div style={pageStyle}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Our Creative Team</h2>
          <p className="text-muted fs-5">Personal Tim Saya</p>
        </div>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="text-center border-0 shadow-sm h-100 transform-hover">
                <Card.Body className="p-4">
                   <img src={member.img} alt={member.name} 
                        style={{ width: '120px', height: '120px', objectFit: 'cover', marginBottom: '20px', borderRadius: '50%' }} />
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Text className="text-primary">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamPage;