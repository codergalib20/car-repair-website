import React from 'react';
import { Card, Col } from 'react-bootstrap';



const card = {
    position: 'relative',
    overflow: 'hidden',
    boxShadow : 'rgb(249 1 1 / 38%) 16px 15px 0.1rem 0.1rem'
}
const cardId = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '40px',
    height: '40px',
    background: '#e83a3b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize : '1rem'
}
const serviceCard = {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}

const Employer = (props) => {
    const {img, name, id,para } = props.employer;
    return (
        <Col  style={serviceCard} className="mt-4">
            <Card style={card}>
                <span style={cardId}>{ id}</span>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{ name}</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                        {
                            para
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Employer;