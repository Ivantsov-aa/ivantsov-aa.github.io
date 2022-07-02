import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authMenu: false,
            openTabPath: '',
            stateHamburgerMenu: false
        }
    }

    openAuthMenu = () => {
        this.setState({ authMenu: !this.state.authMenu });
    }

    handleSelectedTab = (e) => {
        const { value } = e.currentTarget.dataset;
        this.props.headerNav.map(nav => {
            if (value === nav.path) {
                this.setState({ openTabPath: value })
            }
            return nav;
        })
    }

    handleHamburgerButtonClick = () => {
        this.setState({ stateHamburgerMenu: !this.state.stateHamburgerMenu });
    }

    render() {
        const { authMenu, openTabPath, stateHamburgerMenu } = this.state;
        const { headerNav, isLogged, authUser, handleLogOut } = this.props;
        return (
            <header>
                <div className='header__wrapper'>
                    <div className='header_mobile'>
                        <Link to='/'><img src='/images/logo.svg' alt='logo' /></Link>
                        <button className={`hamburger-button ${stateHamburgerMenu ? 'open' : ''}`} onClick={this.handleHamburgerButtonClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={`nav__wrapper ${stateHamburgerMenu ? 'active' : ''}`}>
                        <nav>
                            <ul>
                                {headerNav.map((item, i) => (
                                    <Link to={item.path} data-value={item.path} className={openTabPath === item.path ? 'active' : ''} onClick={this.handleSelectedTab} key={i}><li>{item.name}</li></Link>
                                ))}
                            </ul>
                        </nav>
                        <div className='header_buttons'>
                            {
                                isLogged ?
                                    <>
                                        <button className='authorization_button' onClick={this.openAuthMenu}>
                                            {
                                                (authUser.firstName && authUser.lastName ?
                                                    authUser.firstName + ' ' + authUser.lastName
                                                    :
                                                    authUser.login
                                                )
                                                ||
                                                (authUser.firstName && !authUser.firstName ?
                                                    authUser.firstName
                                                    :
                                                    authUser.login
                                                )
                                                ||
                                                (!authUser.firstName && authUser.lastName ?
                                                    authUser.lastName
                                                    :
                                                    authUser.login
                                                )
                                            }
                                        </button>
                                        {authMenu &&
                                            <div className='authorization_menu'>
                                                <Link to={`/personal-area/${authUser.login.toLowerCase()}/info`} className='authorization_button'>Перейти в личный кабинет</Link>
                                                <button onClick={() => handleLogOut()}>Выйти из аккаунта</button>
                                            </div>
                                        }
                                    </>
                                    :
                                    <Link to='/login' className='authorization_button'>Вход</Link>
                            }
                            <button className='cart_button'>120,00 руб</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;