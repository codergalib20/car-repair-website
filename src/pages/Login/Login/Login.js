import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    return (
        <Container style={{height: '100vh'}} className="d-flex align-items-center justify-content-center py-5 mt-5">
            <div className="text-center">
                <h2>Please Login</h2>
                <button onClick={signInUsingGoogle} className="btn btn-danger"><i class="fab fa-google"></i></button>
            </div>
        </Container>
    );
};

export default Login;