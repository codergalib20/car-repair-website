import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../img/about.jpg';
const aboutImgStyle = {
    maxWidth : '100%'
}
const About = () => {
    return (
        <div className="py-5 mt-5">
            <Container>
                <Row xs={1} lg={2} xl={2} className="align-items-center">
                    <Col>
                        <h1 className="">Who we are?</h1>
                        <p className="py-2" style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum, nesciunt quo dicta rerum officiis, nemo consequuntur inventore reprehenderit excepturi earum natus molestiae possimus, rem repellat. Ducimus dolor aliquam ratione esse quisquam commodi eaque, tempora recusandae adipisci iusto temporibus nulla cumque facere quae. Doloribus magni amet eum reprehenderit ex! Porro!</p>
                        <hr className="bg-secondary"/>
                        <p style={{textAlign: 'justify'}}>Vitae, aperiam provident. Libero dolor non beatae, nam hic ipsum sint optio. Autem, velit dolore, consectetur minima sed eos placeat atque quaerat, voluptas excepturi accusamus. Maxime necessitatibus neque suscipit sint fugit delectus molestias praesentium architecto facere illum accusamus, repellendus, saepe assumenda cumque nobis sed obcaecati modi similique impedit ea earum illo atque? Officia, veniam velit saepe magni, at unde vel voluptatum fugit ratione rem quae et ipsa sapiente dolore recusandae nobis, totam reprehenderit quaerat. Quaerat molestias unde at cum ut iste iusto nobis.</p>
                        <Button variant="outline-success">Reade more</Button>
                    </Col>
                    <Col className="mt-3 mt-lg-0">
                        <img style={aboutImgStyle} className="img-fluid" src={ aboutImg} alt="" />
                    </Col>
               </Row>
            </Container>
        </div>
    );
};

export default About;