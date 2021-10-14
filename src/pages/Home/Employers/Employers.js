import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Employer from '../Employer/Employer';

const Employers = () => {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        fetch('./employee.JSON')
            .then(res => res.json())
            .then(data => setEmployers(data));
    }, []);
    
    return (
        <>
            <Container>
            <h1 className="mt-4">Top {employers.length} Employer</h1>
                <Row xs={1} md={2} lg={3} xl={4}  className="g-4 py-4 align-items-stretch border-1 border-danger">
                    {
                        employers.map(employer => <Employer key={employer.id} employer={employer}></Employer>)
                       }
                </Row>
            </Container>
        </>
    );
};

export default Employers;