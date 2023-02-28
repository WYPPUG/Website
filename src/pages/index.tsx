import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Layout from '../components/layout';
import logoBig from "../images/logo.svg"

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logoBig} alt="WYPPUG logo" />
        <h1 className="display-6 fw-bold">Share the power!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">We are a group of like-minded Power Platform users who aim to meet regularly to share our experience with the Microsoft Power Platform and Dynamics.</p>
          <p>All levels of experience are welcome.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button href="/events/upcoming" variant="primary" size="lg" className="px-4 gap-3">Upcoming sessions</Button>
            <Button href="/events/previous" variant="outline-secondary" size="lg" className="px-4">Previous sessions</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
