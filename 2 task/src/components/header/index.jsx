import React from 'react';
import Logo from "../logo";
import sprite from "../../img/sprite.svg";
import './header.scss';
import Phone from "../phone";
import Social from "../social";

const Header = ({logo, nav, number}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <Logo src={logo} text="крупный интегратор CRM в Росcии и ещё 8 странах"/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            {nav.map(item =>
                                <li key={item.id} className="header__list-item">
                                    <a href={item.href} className="header__list-item-link">{item.text}</a>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <div className="header__right">
                        <div className="header__phone">
                            <Phone hrefNumber="+75555555555" number="+7 555 555-55-55"/>
                        </div>
                        <div className="header__social">
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;