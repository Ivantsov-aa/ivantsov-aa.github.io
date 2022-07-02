import { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    const [statePassword, changeStatePassword] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        let arrayUsers = JSON.parse(localStorage.getItem('users'));
        if (arrayUsers === null) arrayUsers = [];
        arrayUsers.push(data);
        localStorage.setItem('users', JSON.stringify(arrayUsers));

        reset();
    }

    return (
        <form className='registration-form' onSubmit={handleSubmit(onSubmit)}>
            <label>
                Электронная почта
                <input
                    type='text'
                    placeholder='Введите электронную почту'
                    className={errors.login !== undefined ? 'error' : ''}
                    {...register('mail', {
                        required: 'Это поле обязательно к заполнению.',
                        pattern: {
                            value: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/,
                            message: 'E-mail введён некорректно.'
                        }
                    })}
                />
            </label>
            <div className='error-message'>
                {errors?.mail && <p>{errors?.mail?.message || 'Error!'}</p>}
            </div>
            <label>
                Логин
                <input
                    type='text'
                    placeholder='Введите логин'
                    className={errors.login !== undefined ? 'error' : ''}
                    {...register('login', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 3,
                            message: 'Логин должен содержать от 3 до 16 символов.'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Логин должен содержать от 3 до 16 символов.'
                        },
                        pattern: {
                            value: /[a-zA-Z0-9]/,
                            message: 'Логин введён некорректно.'
                        }
                    })}
                />
            </label>
            <div className='error-message'>
                {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
            </div>
            <label className='password'>
                Пароль
                <input
                    type={statePassword ? 'text' : 'password'}
                    className={`${statePassword ? 'active' : ''} ${errors.password !== undefined ? 'error' : ''}`}
                    placeholder='Введите пароль'
                    {...register('password', {
                        required: 'Это поле обязательно к заполнению.',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен содержать от 6 до 16 символов.'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Пароль должен содержать от 6 до 16 символов.'
                        },
                        pattern: {
                            value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                            message: 'Недостаточно сложный пароль.'
                        }
                    })}
                />
                <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
            </label>
            <div className='error-message'>
                {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
            </div>
            <label className='password'>
                Повторите пароль
                <input
                    type={statePassword ? 'text' : 'password'}
                    className={`${statePassword ? 'active' : ''} ${errors.password !== undefined ? 'error' : ''}`}
                    placeholder='Введите пароль'
                    {...register('password_repeat', {
                        required: 'Это поле обязательно к заполнению.',
                        validate: value => {
                            const { password } = getValues();
                            return value === password || 'Пароли не совпадают.'
                        }
                    })}
                />
                <p className={statePassword ? 'active' : ''} onClick={() => changeStatePassword(!statePassword)}></p>
            </label>
            <div className='error-message'>
                {errors?.password_repeat && <p>{errors?.password_repeat?.message || 'Error!'}</p>}
            </div>
            <div className='apply-agreement'>
                <label>
                    <input type='checkbox' className={errors?.apply_agreement && 'error'} {...register('apply_agreement', {
                        required: 'Примите условия обслуживания.'
                    })} />
                    Условия обслуживания
                </label>
            </div>
            <input type='submit' value='Регистрация' />
        </form>
    )
}

export default RegistrationForm;