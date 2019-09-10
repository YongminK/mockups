import React from 'react';
import '../../style/header.css';

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'> 
                <div class='header__logo'></div>
                <div class='header__menu'>
                    <nav className='header__menu__nav'>
                        <ul className='header__menu__navlist'>
                            <li><a href='#'>О нас</a></li>
                            <li className='show-service'><a href='#'>Услуги<div className='show-more'></div></a>
                                <ul className='header__submenu'>
                                    <li><a href='#'>О сервисе</a></li>
                                    <li><a href='#'>Наша команда</a></li>
                                    <li><a href='#'>Вакансии</a></li>
                                    <li><a href='#'>Инвесторы</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Вакансии</a></li>
                            <li><a href='#'>Новости</a></li>
                            <li className='show-agreement'><a href='#'>Соглашения<div className='show-more'></div></a>
                                <ul className='header__submenu'>
                                    <li><a href='#'>Сообщества</a></li>
                                    <li><a href='#'>Связь с нами</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__menu__buttons'>
                        <button className='header__menu__button-signin'>Войти</button>
                        <button className='header__menu__button-regestration'>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        )
    }
}