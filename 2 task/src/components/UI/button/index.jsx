import React from 'react';
import './blueButton.scss';

const BlueButton = ({children, ...props}) => {
    return (
        <button className="blue-button" {...props}>{children}</button>
    );
};

export default BlueButton;