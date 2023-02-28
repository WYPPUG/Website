import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout';

const App: React.FunctionComponent = () => {
  return (
    <Layout>

<Container>
  <Row className="justify-content-md-center">
    <Col md={6}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>First WYPPUG meeting</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">End of March 2023 -- Location: TBC</Card.Subtitle>
          <Card.Text>
            <p/>
            We're currently arranging our first session and deciding if it will be in person, online or both.
            Please get in touch if you can offer a venue/sponsorship, want to speak or have other ideas?
          </Card.Text>
          <Button variant="primary" href="/contact">Contact</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>

    </Layout>
  )
}

export default App
