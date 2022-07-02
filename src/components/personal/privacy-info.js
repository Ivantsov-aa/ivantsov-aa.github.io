import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../header";
import Footer from "../footer";

const PrivacyInfo = ({ headerNav, footerNav, isLogged, authUser, handleLogOut, handleNewPersonalInfo }) => {
    const [stateEditor, openEditor] = useState(false);

    const {
        register,
        handleSubmit
    } = useForm({
        mode: 'onSubmit'
    });

    const handleOpenEditor = () => {
        openEditor(true);
    }


    const onSubmit = (data) => {
        handleNewPersonalInfo(data)
        openEditor(false);
    }

    return (
        <>
            <Header headerNav={headerNav} isLogged={isLogged} authUser={authUser} handleLogOut={handleLogOut} />
            <section className='personal_area'>
                <nav>
                    <ul>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/info`} className='private active'><li>Личная информация</li></Link>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/orders`} className='orders'><li>Заказы</li></Link>
                        <Link to={`/personal-area/${authUser.login.toLowerCase()}/terms`} className='agreement'><li>Условия обслуживания</li></Link>
                    </ul>
                </nav>
                {
                    !stateEditor ?
                        <div className='personal_info'>
                            <div className='about_person'>
                                <div className='person_name'>
                                    {authUser.firstName && authUser.lastName ? <p>{authUser.firstName} <span>{authUser.lastName}</span></p> : <p>Как Вас зовут?</p>}
                                    {authUser.address ? <p>Адрес: <span>{authUser.address}</span></p> : <p>Адрес: Неизвестно</p>}
                                    <button onClick={handleOpenEditor}></button>
                                    {authUser.phone ? <p>Телефон: <span>{authUser.phone}</span></p> : <p>Телефон: <span>Неизвестно</span></p>}
                                    <p>
                                        Электронная почта: <span>{authUser.mail}</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='edit__about_person'>
                                <div>
                                    <label>
                                        Имя:
                                        <input
                                            type='text'
                                            defaultValue={authUser.firstName ? authUser.firstName : ''}
                                            {...register('firstName')}
                                        />
                                    </label>
                                    <label>
                                        Фамилия:
                                        <input
                                            type='text'
                                            defaultValue={authUser.lastName ? authUser.lastName : ''}
                                            {...register('lastName')}
                                        />
                                    </label>
                                    <label>
                                        Адрес:
                                        <input
                                            type='text'
                                            defaultValue={authUser.address ? authUser.address : ''}
                                            {...register('address')}
                                        />
                                    </label>
                                    <label>
                                        Телефон:
                                        <input
                                            type='tel'
                                            defaultValue={authUser.phone ? authUser.phone : ''}
                                            {...register('phone')}
                                        />
                                    </label>
                                    <label>
                                        Электронная почта:
                                        <input
                                            type='text'
                                            defaultValue={authUser.mail}
                                            {...register('mail')}
                                        />
                                    </label>
                                </div>
                                <input type='submit' value='Подтвердить' />
                            </div>
                        </form>
                }

            </section>
            <Footer footerNav={footerNav} />
        </>
    )
}

export default PrivacyInfo;