import React from 'react';
import './logo.scss';

const Logo = ({src, text}) => {
    return (
        <div className="logo">
            <a className="logo__link" href="#">
                <img src={src} alt=""/>
                <span>{text}</span>
            </a>
        </div>
    );
};

export default Logo;