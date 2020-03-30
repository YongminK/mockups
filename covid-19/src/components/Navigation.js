import React from "react";
import '../styles/navigation.sass'
export default function Navigation() {
    return(
        <div className='navigation header'>
            <div className='navigation__logo'>
                <img src={require('../img/virus-icon.png')} alt=""/>
                <span>COVID-19</span>
            </div>
            <nav>
                <ul>
                    <li>Overview</li>
                    <li>Contagion</li>
                    <li>Symptoms </li>
                    <li>Prevention</li>
                </ul>
                <button>
                    Contact
                </button>
            </nav>
        </div>
    )
}