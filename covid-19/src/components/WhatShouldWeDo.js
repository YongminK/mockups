import React from "react";
import '../styles/prevention.sass'
const PREVENTION_CONTENT = [
    {
        number: '01',
        title: 'Wear masks',
        text: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
        img: require('../img/Mask girl.png')
    },
    {
        number: '02',
        title: 'Wash Your Hands',
        text: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
        img: require('../img/wash-hands.png')
    },
    {
        number: '03',
        title: 'Use nose - rag',
        text: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
        img: require('../img/nose-rag.png')
    },
    {
        number: '04',
        title: 'Avoid contacts',
        text: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
        img: require('../img/avoid-contacts.png')
    },
]

export default function WhatShouldWeDo() {
    return (
        <section className="prevention block" id='prevention'>
            <p className="title-red">What is Covid-19</p>
            <p className="title-green">Symptomps</p>
            <p className="text">
                Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly
                identified type has caused a recent outbreak of respiratory
            </p>
            {
                PREVENTION_CONTENT.map((item) =>
                    <div className='prevention__block'>
                        <div className='prevention__block__text'>
                            <div>{item.number}</div>
                            <p className='title-green'>{item.title}</p>
                            <p className="text">{item.text}</p>
                        </div>
                        <img src={item.img} alt=""/>
                    </div>
                )
            }
        </section>
    )
}