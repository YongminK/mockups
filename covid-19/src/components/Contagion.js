import React from "react";

const CONTAGION_CONTENT = [
    {
        img: require('../img/air-transmission.png'),
        title: 'Air Transmission',
        text: 'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify'
    },
    {
        img: require('../img/human-contacts.png'),
        title: 'Human Contacts',
        text: 'Washing your hands is one of thesimplest ways you can protect'
    },
    {
        img: require('../img/containted-objects.png'),
        title: 'Containted Objects',
        text: 'Use the tissue while sneezing,In this way, you can protect your droplets.'
    }
];
export default function Contagion() {
    return (
        <section className="contagion block" id='contagion'>
            <p className="title-red">Covid-19</p>
            <p className="title-green">Contagion</p>
            <p className="text">
                Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly
                identified type
            </p>
            <div className="contagion__content">
                {CONTAGION_CONTENT.map((item) =>
                    <div className="contagion__content__block">
                        <img src={item.img} alt=""/>
                        <p className="title-green">{item.title}</p>
                        <p className="text">{item.text}</p>
                    </div>
                )
                }
            </div>
        </section>
    )
}