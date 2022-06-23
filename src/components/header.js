import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { headerNav } = this.props;
        return (
            <header>
                <div className='header__wrapper'>
                    <nav>
                        <Link to='/'><img src='./images/logo.svg' alt='logo' /></Link>
                        <ul>
                            {headerNav.map((item, i) => (
                                <Link to={item.path} key={i}><li>{item.name}</li></Link>
                            ))}
                        </ul>
                    </nav>
                    <div className='header_buttons'>
                        <button className='authorization_button'>Вход</button>
                        <button className='cart_button'>120,00 руб</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;