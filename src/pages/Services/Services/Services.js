import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const servicesPage = {
        padding : '80px 0'
    }
    
    return (
        <div style={servicesPage}>
            <Container>
                <Row xs={1} md={2} lg={3} className="mt-3 g-4 align-items-stretch">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;