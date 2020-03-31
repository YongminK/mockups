import React from "react";
import '../styles/navigation.sass'

export default function Navigation() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    React.useEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWidth)
    })
    return (
        <div className='navigation top'>
            <div>
                <div className='navigation__logo'>
                    <img src={require('../img/virus-icon.png')} alt=""/>
                    <span>COVID-19</span>
                </div>
                {width >= 768 ?
                    <nav>
                        <ul>
                            <li><a href="#overview">Overview</a></li>
                            <li><a href="#contagion">Contagion</a></li>
                            <li><a href="#symptoms">Symptoms</a></li>
                            <li><a href="#prevention">Prevention</a></li>
                        </ul>
                        <button>
                            Contact
                        </button>
                    </nav>
                    :
                    <>
                        <img src={isMenuOpen ? require('../img/close.svg') : require('../img/hamburger.svg')}
                             onClick={() => setMenuOpen(!isMenuOpen)} className='navigation__menu'/>

                    </>
                }
            </div>

            {isMenuOpen && width < 768 ?
                <nav>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#contagion">Contagion</a></li>
                        <li><a href="#symptoms">Symptoms</a></li>
                        <li><a href="#prevention">Prevention</a></li>
                    </ul>
                    <button>
                        Contact
                    </button>
                </nav>
                : <></>
            }
        </div>
    )
}