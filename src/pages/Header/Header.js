import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const userPhoto = {
        width: '110%',
        minHeight: '100%',
    }
    const userPhotoCover = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid #fff',
        boxShadow: '0 0 4px 4px RGB(149,151,128)',
        overflow : 'hidden'
    }
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="success" className="my-navbar" expand="lg">
                <Container className="text-center">
                    <NavLink to="/" className="h2 text-light text-decoration-none mb-0">Car Repair</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <NavLink className="text-light text-decoration-none me-4" to="/home">Home</NavLink>
                        <NavLink className="text-light text-decoration-none me-4" to="/about">About</NavLink>
                        <NavLink className="text-light text-decoration-none me-4" to="/services">Services</NavLink>
                    </Nav>
                    <Button className="btn btn-outline-light px-5">Follow me</Button>
                    <div className="py-2 d-flex justify-content-evenly">
                        {
                        user?.email ?
                            <button onClick={logOut} className="btn btn-link text-light text-decoration-none me-2" >Logout</button>
                                :
                        <NavLink className="text-light text-decoration-none ms-4 me-2" to="/login">Login</NavLink>
                        }
                            {
                                user.photoURL ? <div className="me-3" style={userPhotoCover} >
                                <img style={userPhoto}  src={user.photoURL} alt="" />
                            </div> : <div></div>
                         }
                        <Navbar.Text className="text-light">
                            <a className="text-light text-decoration-none" href="#login">{ user?.displayName}</a>
                        </Navbar.Text>
                    </div>
                    </Navbar.Collapse>
                    
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;