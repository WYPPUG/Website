import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/layout';
import { OutboundLink } from "gatsby-plugin-google-gtag";

const App: React.FunctionComponent = () => {
  return (
    <Layout>

      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            Our primary channel for communication is currently our LinkedIn Group.
            <p/>
            <Button href="https://www.linkedin.com/groups/12785894/" variant="primary">LinkedIn Group</Button>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}

export default App
