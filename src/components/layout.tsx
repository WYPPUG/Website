import React, { ReactNode } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logo-small.svg"

const Layout: React.FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            height="90"
                            src={logo}
                            className="d-inline-block align-top"
                            alt="WYPPUG logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/events/upcoming">Upcoming Sessions</Nav.Link>
                            <Nav.Link href="/events/previous">Previous Sessions</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            {/* <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="mt-5">
                {children}
            </div>

            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center text-muted">WYPPUG</div>
            </footer>
        </>
    )
}

export default Layout
