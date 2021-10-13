import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/xz9fvbk/slider-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="slider-caption">
                        <div>
                           <h3>First slide label</h3>
                           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/XCj9XXc/slider2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="slider-caption">
                        <div>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  
                    className="d-block w-100"
                    src="https://i.ibb.co/y04k1ht/slider3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="slider-caption">
                        <div>
                           <h3>Third slide label</h3>
                           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;

