import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import Layout from '../../components/layout';

const App: React.FunctionComponent = () => {
  return (
    <Layout>

      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <strong>We're a brand-new group so we've not had any sessions yet!</strong>
            <p/>
            See <a href="/events/upcoming">upcoming events</a> for details of our upcoming sessions.
          </Col></Row>
      </Container>
    </Layout>
  )
}

export default App
