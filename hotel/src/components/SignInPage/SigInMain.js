import React from 'react';
import '../../style/SignInMain.css'
export default class SigInMain extends React.Component{
    render(){
        return(
            <>
                <div className='signIn'>
                    <div className="signIn__form">
                        <form>
                            <h2 className='signIn__form__header'>Войти</h2>
                            <input className='signIn__form__input' type='email' placeholder='Email'></input>
                            <input className='signIn__form__input' type='password' placeholder='Пароль'></input>
                            <button className='signIn__form__submit' type='submit'></button>
                        </form>
                        <div className="signIn__form__newAccount">
                            <p className='signIn__form__newAccount_text'>Нет аккаунта на Toxin?</p>
                            <button className='signIn__form__newAccount_button'>Создать</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}