import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="success" className="my-navbar" expand="lg">
                <Container>
                    <NavLink to="/" className="h2 text-light text-decoration-none mb-0">Car Repair</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <NavLink className="text-light text-decoration-none me-4" to="/home">Home</NavLink>
                        <NavLink className="text-light text-decoration-none me-4" to="/">About</NavLink>
                        <NavLink className="text-light text-decoration-none me-4" to="/services">Services</NavLink>
                        <NavLink className="text-light text-decoration-none me-4" to="/">Login</NavLink>
                    </Nav>
                        <Button className="btn btn-outline-light px-5">Search</Button>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;