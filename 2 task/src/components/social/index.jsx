import React from 'react';
import sprite from "../../img/sprite.svg";
import './social.scss';

const Social = () => {
    return (
        <ul className="social">
            <li className="social__item">
                <a href="#" className="social__item-link">
                    <svg>
                        <use xlinkHref={sprite + "#telegram"}/>
                    </svg>
                </a>
            </li>
            <li className="social__item">
                <a href="#" className="social__item-link">
                    <svg>
                        <use xlinkHref={sprite + "#viber"}/>
                    </svg>
                </a>
            </li>
            <li className="social__item">
                <a href="#" className="social__item-link">
                    <svg>
                        <use xlinkHref={sprite + "#whatsUp"}/>
                    </svg>
                </a>
            </li>
        </ul>
    );
};

export default Social;