import './backImg.css'
import React from 'react';

const BackImg = ({ src, msgAlt }) => {
    return (
        <div className="img-background">
            <img src={src} alt={msgAlt} />
        </div>

    )
}

export default BackImg;