import React from 'react';
import { useParams } from 'react-router';
const aboutServiceStyle = {
    marginTop : '60px'
}
const AboutService = () => {
    const { aboutServicesId } = useParams()
    return (
        <div style={aboutServiceStyle}>
            This is single service{aboutServicesId}
        </div>
    );
};

export default AboutService;