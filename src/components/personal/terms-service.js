import React from "react";
import { Link, Navigate } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";

class TermsService extends React.Component {
    render() {
        const { headerNav, footerNav, isLogged, authUser, handleLogOut } = this.props;

        return (
            isLogged ?
                <>
                    <Header headerNav={headerNav} isLogged={isLogged} authUser={authUser} handleLogOut={handleLogOut} />
                    <section className='personal_area'>
                        <nav>
                            <ul>
                                <Link to={`/personal-area/${authUser.login.toLowerCase()}/info`} className='private'><li>Личная информация</li></Link>
                                <Link to={`/personal-area/${authUser.login.toLowerCase()}/orders`} className='orders'><li>Заказы</li></Link>
                                <Link to={`/personal-area/${authUser.login.toLowerCase()}/terms`} className='agreement active'><li>Условия обслуживания</li></Link>
                            </ul>
                        </nav>
                    </section>
                    <Footer footerNav={footerNav} />
                </>
                :
                <Navigate to='/' replace />
        )
    }
}

export default TermsService;