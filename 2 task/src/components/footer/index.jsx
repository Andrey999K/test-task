import React from 'react';
import './footer.scss';
import Phone from "../phone";
import Social from "../social";

const Footer = () => {
    return (
       <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__about">
                        <div className="footer__text-gray">
                            О компании
                        </div>
                        <ul className="footer__list footer__about-list">
                            <li className="footer__about-item"><a href="#">Партнёрская программа</a></li>
                            <li className="footer__about-item"><a href="#">Вакансии</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <div className="footer__text-gray">
                            Меню
                        </div>
                        <ul className="footer__list footer__menu-list">
                            <li className="footer__menu-item"><a href="#">Расчёт стоимости</a></li>
                            <li className="footer__menu-item"><a href="#">Кейсы</a></li>
                            <li className="footer__menu-item"><a href="#">Услуги</a></li>
                            <li className="footer__menu-item"><a href="#">Благодарственные письма</a></li>
                            <li className="footer__menu-item"><a href="#">Виджеты</a></li>
                            <li className="footer__menu-item"><a href="#">Сертификаты</a></li>
                            <li className="footer__menu-item"><a href="#">Интеграции</a></li>
                            <li className="footer__menu-item"><a href="#">Блог на Youtube</a></li>
                            <li className="footer__menu-item"><a href="#">Наши клиенты</a></li>
                            <li className="footer__menu-item"><a href="#">Вопрос / Ответ</a></li>
                        </ul>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__text-gray">Контакты</div>
                        <div className="footer__contacts-content">
                            <Phone hrefNumber="+75555555555" number="+7 555 555-55-55"/>
                            <Social/>
                            <div className="footer__address">Москва, Путевой проезд 3с1, к 902</div>
                        </div>
                        <div className="footer__rights">
                            ©WELBEX 2022. Все права защищены.<br/>
                            <span>Политика конфиденциальности</span>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
    );
};

export default Footer;