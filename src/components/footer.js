import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        const { footerNav } = this.props;
        return (
            <footer>
                <div className='footer__wrapper'>
                    <div className='footer__flex'>
                        <section>
                            <h2>Наши адреса</h2>
                            <div className='our-addresses'>
                                <div className='address-margin'>
                                    <h3>
                                        г. Волгоград
                                    </h3>
                                    <p className='address'>
                                        ул. Колосовая, д. 12 (за заправкой Газпром)
                                    </p>
                                    <p className='phone-number'>
                                        +7 903 376 03 16
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        г. Волжский
                                    </h3>
                                    <p className='address'>
                                        пр. Ленина, д. 104-а
                                    </p>
                                    <p className='phone-number'>
                                        +7 962 761 64 94
                                    </p>
                                </div>
                                <div className='address-margin'>
                                    <h3>
                                        г. Астрахань
                                    </h3>
                                    <p className='address'>
                                        ул.Пороховая, д. 2
                                    </p>
                                    <p className='address'>
                                        ул. Богдана Хмельницкого, д. 5
                                    </p>
                                    <p className='phone-number'>
                                        +7 967 827 65 63
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        г. Ростов-на-Дону
                                    </h3>
                                    <p className='address'>
                                        пр.Королева, 1 п
                                    </p>
                                    <p className='phone-number'>
                                        +7 961 426 57 99
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className='our-contacts'>
                            <div>
                                <h2>График работы</h2>
                                <p className='working-hours'>
                                    Понедельник - пятница: <span>9.00 - 19.00</span>
                                </p>
                                <p className='working-hours'>
                                    Суббота - воскресенье: <span>9.00 - 17.00</span>
                                </p>
                            </div>
                            <div className='contacts'>
                                <h2>С нами можно связаться</h2>
                                <p className='mail'>AutoDiamond@mail.ru</p>
                                <p className='phone-number'>+7 8442 600 3890</p>
                            </div>
                            <img src='./images/logo.svg' alt='logo' />
                        </section>
                    </div>
                </div>
                <nav>
                    <ul>
                        {footerNav.map((item, i) => (
                            <Link to={item.path} key={i}><li>{item.name}</li></Link>
                        ))}
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;