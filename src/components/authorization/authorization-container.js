import { Link, Navigate } from "react-router-dom";


import AuthorizationForm from "./authorization-form";

const AuthorizationContainer = (props) => {
    return (
        <section className='authorization__wrapper'>
            <div className='authorization__img'>
                <Link to='/'><img src='../images/logo.svg' alt='logo' /></Link>
            </div>
            <div className='authorization-form__wrapper'>
                <div className='authorization__toggle'>
                    <Link
                        to='/login'
                        className='active'
                    >Вход</Link>
                    <Link to='/registration'>Регистрация</Link>
                </div>
                <AuthorizationForm handleLogIn={props.handleLogIn} />
            </div>
            {props.isLogged && <Navigate to={`/personal-area/${props.authUser.login.toLowerCase()}/info`} replace />}
        </section>
    )
}

export default AuthorizationContainer;