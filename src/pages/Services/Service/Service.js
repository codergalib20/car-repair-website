import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img,id, name, para1, price } = props.service;
    const serviceCard = {
        borderTop: '10px solid red',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius : '10px 10px 0 0'
    }
    return (
        <div >
             <Col  style={serviceCard}>
                <Card className="border-0 shadow">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{ name}</Card.Title>
                        <Card.Text>
                            { para1.substring(0,200)}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-danger py-3">
                        <Link to={ `/service/${id}`} className="text-decoration-none btn btn-outline-danger">About me</Link>
                    </Card.Footer>
                 </Card>
                </Col>
        </div>
    );
};

export default Service;