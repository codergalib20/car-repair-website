import React from 'react';
import { useParams } from 'react-router';
const aboutServiceStyle = {
    marginTop : '60px'
}
const AboutService = () => {
    const { aboutServicesId } = useParams()
    return (
        <div className="py-5 mt-5" style={aboutServiceStyle}>
            <h1 className="text-center">This is single service{aboutServicesId}</h1>
        </div>
    );
};

export default AboutService;