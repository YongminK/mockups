import React from "react";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        return (
            <>
                {this.state.width < 769 ?
                    <>
                        {!this.props.showMobileMenu ?
                            <div className='hamburger-menu'
                                 onClick={() => this.props.setShowMobileMenu(!this.props.showMobileMenu)}>
                                <img src={require('../img/Menu.svg')}/>
                            </div>
                            :
                            <div className='hamburger-menu hamburger-menu-close'
                                 onClick={() => this.props.setShowMobileMenu(!this.props.showMobileMenu)}>
                                <img src={require('../img/menu-close.svg')}/>
                            </div>
                        }

                        {this.props.showMobileMenu ?
                            <div className='mobile-menu'>
                                <ul>
                                    <li><a href="/#">Новости<span/></a></li>
                                    <li><a href="/#">обзоры<span/></a></li>
                                    <li><a href="/#">музыка<span/></a></li>
                                    <li><a href="/#">архитектура<span/></a></li>
                                    <li><a href="/#">кино<span/></a></li>
                                    <li><a href="/#">театр<span/></a></li>
                                    <li><a href="/#">литература<span/></a></li>
                                    <li><a href="/#">религия<span/></a></li>
                                    <li><a href="/#">живопись<span/></a></li>
                                </ul>
                            </div>
                            : <></>
                        }
                    </>
                    : <> </>
                }
                <p className='header header-big'>Новости культуры</p>
                <section className='slider-big'>
                    <div className="darker-background">
                        <p className='header-orange'>новое</p>
                        <p className='header-white'>Подводный отель</p>
                        <p className='text-white'>Как известно, Дубай – город контрастов. Самые революционные и
                            фантастические мечты архитекторов
                            способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти</p>
                        <div className='circle-steps'>
                            <div className="circle circle-white-active"/>
                            <div className="circle circle-white-inactive"/>
                        </div>
                    </div>
                </section>
                <section className='news'>
                    <p className='header-section'>Новости</p>
                    <div className='news__big'>
                        <div className="news__big__text">
                            <p className='header-black'>Новости культуры России и всего мира</p>
                            <p className='text-black'>В минувшие выходные в Москве на фестивале «Оберег» вручили первую
                                премию Russian World Music
                                Awards</p>
                        </div>
                    </div>
                    <div>
                        <div className='news__small'>
                            <img src={require("../img/news-leonov.png")} alt=""/>
                            <div>
                                <p className='header-black'>
                                    Открытие нового памятника Евгению Леонову
                                </p>
                                <p className='text-black'>
                                    10 сентября в 15:00 был открыт памятник писателю
                                </p>
                            </div>
                        </div>
                        <div className='news__small'>
                            <img src={require('../img/news_talks.png')} alt=""/>
                            <div>
                                <p className='header-black'>
                                    Беседы с писателями
                                </p>
                                <p className='text-black'>
                                    Русские писатели беседуют о важности искусства
                                </p>
                            </div>
                        </div>
                        <div className='news__small'>
                            <img src={require('../img/news_Patrick_s_Day.png')} alt=""/>
                            <div>
                                <p className='header-black'>
                                    День и ночь св. Патрика: встреча старых друзей
                                </p>
                                <p className='text-black'>
                                    Не Джойсом единым живет Ирландия!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='reviews'>
                    <p className='header-section'>Обзоры</p>
                    <div className='reviews__block'>
                        <img src={require('../img/reviews-monparnas.png')} alt=""/>
                        <p className='header-black'>«Шальные годы» Монпарнаса</p>
                        <p className='text-black'>В Музее изобразительных искусств имени Пушкина с 29 сентября по 29
                            ноября проходит выставка
                            «Шальные годы Монпарнаса»</p>
                    </div>
                    <div className='reviews__block'>
                        <img src={require('../img/reviews-anatomy.png')} alt=""/>
                        <p className='header-black'>Анатомия за 30 секунд</p>
                        <p className='text-black'>Сейчас, когда мир открыт нараспашку для человека и его познавательных
                            изысканий, интерес к научно-популярной литературе заметно вырос</p>
                    </div>
                    <div className='reviews__block'>
                        <img src={require('../img/reviews-balet.png')} alt=""/>
                        <p className='header-black'>Русские балетные сезоны</p>
                        <p className='text-black'>В Новом Иерусалиме стартовал необычный культурно-развлекательный
                            спектакль, который покажут в новом театре</p>
                    </div>
                    <div className='reviews__block'>
                        <img src={require('../img/reviews-chudaki.png')} alt=""/>
                        <p className='header-black'>Сферические чудаки</p>
                        <p className='text-black'> Корреспондентам «Культурного обозревателя» посчастливилось побывать в
                            театре «Сфера» на премьере спектакля «Чудаки и зануды» </p>
                    </div>
                    <div className='pagination'>
                        <ul>
                            <li></li>
                            <li className='page-active'>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <p></p>
                        <div></div>
                    </div>
                    <div>
                        <p></p>
                        <div></div>
                    </div>
                    <div></div>
                    <div>
                        <p></p>
                        <div></div>
                    </div>
                    <div>
                        <p></p>
                        <div></div>
                    </div>
                </section>
            </>
        )
    }
}