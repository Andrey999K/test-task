import React from 'react';
import './phone.scss';

const Phone = ({hrefNumber, number}) => {
    return (
        <a href={"tel:" + hrefNumber} className="phone-number">{number}</a>
    );
};

export default Phone;