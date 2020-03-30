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
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#contagion">Contagion</a></li>
                    <li><a href="#symptoms">Symptoms</a> </li>
                    <li><a href="#prevention">Prevention</a></li>
                </ul>
                <button>
                    Contact
                </button>
            </nav>
        </div>
    )
}