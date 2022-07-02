import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { footerNav } = this.props;
        return (
            <footer>
                <div className='footer__wrapper'>
                    <div className='footer__flex'>
                        <div>
                            <h2>График работы</h2>
                            <p className='working-hours'>
                                Понедельник - пятница: <span>9.00 - 19.00</span>
                            </p>
                            <p className='working-hours'>
                                Суббота - воскресенье: <span>9.00 - 17.00</span>
                            </p>
                        </div>
                        <div>
                            <h2>С нами можно связаться</h2>
                            <p className='mail'>AutoDiamond@mail.ru</p>
                            <p className='phone-number'>+7 8442 600 3890</p>
                        </div>
                        <Link to='/' onClick={this.scrollToTop}><img src='/images/logo.svg' alt='logo' /></Link>
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