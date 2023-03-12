import './App.scss';
import Header from "./components/header";
import React, {useState} from "react";
import logo from './img/logo.svg';
import Footer from "./components/footer";
import BlueButton from "./components/UI/button";

function App() {

  const [nav, setNav] = useState([
      {
          id: 1,
          href: "#",
          text: "Услуги"
      },
      {
          id: 2,
          href: "#",
          text: "Виджеты"
      },
      {
          id: 3,
          href: "#",
          text: "Интеграции"
      },
      {
          id: 4,
          href: "#",
          text: "Кейсы"
      },
      {
          id: 5,
          href: "#",
          text: "Сертификаты"
      }
  ])

  return (
    <div className="App">
      <Header logo={logo} nav={nav} number="+7 555 555-55-55"/>
      <main className="main">
          <section className="banner">
              <div className="container">
                  <div className="banner__content">
                      <div className="banner__left">
                          <h2 className="banner__title">
                              Зарабатывайте больше <span>с WELBEX</span>
                          </h2>
                          <div className="banner__short-description">
                              Развиваем и контролируем продажи за вас
                          </div>
                      </div>
                      <div className="banner__right">
                          <div className="banner__list-title">
                              Вместе с <span>бесплатной консультацией</span> мы дарим:
                          </div>
                          <ul className="banner__list">
                              <li className="banner__list-item">
                                  <div className="banner__list-item-name">Виджеты</div>
                                  <div className="banner__list-item-description">30 готовых решений</div>
                              </li>
                              <li className="banner__list-item">
                                  <div className="banner__list-item-name">Dashboard</div>
                                  <div className="banner__list-item-description">с показателями
                                      вашего бизнеса</div>
                              </li>
                              <li className="banner__list-item">
                                  <div className="banner__list-item-name">Skype Аудит</div>
                                  <div className="banner__list-item-description">отдела продажи CRM системы</div>
                              </li>
                              <li className="banner__list-item">
                                  <div className="banner__list-item-name">35 дней</div>
                                  <div className="banner__list-item-description">использования CRM</div>
                              </li>
                          </ul>
                          <div className="banner__button">
                              <BlueButton>Получить консультацию</BlueButton>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
