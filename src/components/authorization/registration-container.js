import React from "react";
import { Link } from "react-router-dom";


import RegistrationForm from "./registration-form";

const RegistrationContainer = () => {
    return (
        <section className='authorization__wrapper'>
            <div className='authorization__img'>
                <Link to='/'><img src='../images/logo.svg' alt='logo' /></Link>
            </div>
            <div className='authorization-form__wrapper'>
                <div className='authorization__toggle'>
                    <Link to='/login'>Вход</Link>
                    <Link
                    to='/registration'
                        className='active'
                    >Регистрация</Link>
                </div>
                <RegistrationForm />
            </div>
        </section>
    )
}

export default RegistrationContainer;