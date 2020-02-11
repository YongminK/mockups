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
                <p>Новости культуры</p>
                <section>
                    <div>новое</div>
                    <p>Подводный отель</p>
                    <p>Как известно, Дубай – город контрастов. Самые революционные и фантастические мечты архитекторов
                        способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти</p>
                    <div></div>
                </section>
                <section>
                    <p>Новости</p>
                    <div>
                        <p>Новости культуры России и всего мира</p>
                        <p>В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music
                            Awards</p>
                    </div>
                    <div>
                        <div>
                            <img src="" alt=""/>
                            <div>
                                <p>
                                    Открытие нового памятника Евгению Леонову
                                </p>
                                <p>
                                    10 сентября в 15:00 был открыт памятник писателю
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <div>
                                <p>
                                    Открытие нового памятника Евгению Леонову
                                </p>
                                <p>
                                    10 сентября в 15:00 был открыт памятник писателю
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <div>
                                <p>
                                    Открытие нового памятника Евгению Леонову
                                </p>
                                <p>
                                    10 сентября в 15:00 был открыт памятник писателю
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Обзоры</p>
                    <div>
                        <img src="" alt=""/>
                        <p>«Шальные годы» Монпарнаса</p>
                        <p>В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка
                            «Шальные годы Монпарнаса»</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>«Шальные годы» Монпарнаса</p>
                        <p>В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка
                            «Шальные годы Монпарнаса»</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>«Шальные годы» Монпарнаса</p>
                        <p>В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка
                            «Шальные годы Монпарнаса»</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>«Шальные годы» Монпарнаса</p>
                        <p>В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка
                            «Шальные годы Монпарнаса»</p>
                    </div>
                    <div></div>
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