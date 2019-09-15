import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function() {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar bg="white">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo_main.png"
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
            >
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">
                        <Button bsPrefix="btn-parent">Parents</Button>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <Button bsPrefix="btn-faq" >FAQ</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
