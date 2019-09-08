import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import "../assets/styles/slick.scss";
import "../assets/styles/slick-theme.scss";
import Slider from "react-slick";

import Header from './Header';

export default class HomeContainer extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            variableWidth: true,
            className: 'slider',
            // autoplay: true
        };

        return (
            <Fragment>
                <Header />

                <Slider {...settings}>
                    <div className="slide">
                        <div className="d-1">
                            <div className="slide__description">
                                <div className="slide__title">The Hardkiss | Тур Залізна Ластівка</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="d-2">
                            <div className="slide__description">
                                <div className="slide__title">Skillet | Victorious tour</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="d-3">
                            <div className="slide__description">
                                <div className="slide__title">Detach | D.R.A.M.A. show</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="d-4">
                            <div className="slide__description">
                                <div className="slide__title">Within Temptation | Resist Album Tour</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="d-5">
                            <div className="slide__description">
                                <div className="slide__title">The Hardkiss | Тур Залізна Ластівка</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="d-6">
                            <div className="slide__description">
                                <div className="slide__title">The Hardkiss | Тур Залізна Ластівка</div>
                                <div className="slide__date">20 вересня 2019 р.</div>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className="content-wrapper">
                    <div className="search-box">
                        <div className="search-box__input-wrapper">
                            <input
                                type="text"
                                className="search-box__search-input"
                                placeholder="Пошук виконвця, групи, концерту ..."
                            />

                            <div className="search-box__city-link"><span>Будь-яке місто</span></div>
                        </div>
                        <div className="search-box__filter-button"></div>
                        <button type="submit" className="search-box__submit-button">Пошук</button>
                    </div>

                    <div className="popular-links m-b-50">
                        <a href="#" className="popular-links__link">The Hardkiss</a>
                        <a href="#" className="popular-links__link">Detach</a>
                        <a href="#" className="popular-links__link">Within Temptation</a>
                        <a href="#" className="popular-links__link">Файне Місто</a>
                        <a href="#" className="popular-links__link">ZaxidFest</a>
                        <a href="#" className="popular-links__link">Залізна Ластівка</a>
                        <a href="#" className="popular-links__link">D.R.A.M.A.</a>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h6 className="section-title">Популярні події</h6>

                        </div>
                        <div className="col-lg-6"></div>
                    </div>

                    <div className="event-list">

                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="3.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date"><a href="#">27 Серпня</a>, 20:00 П'ятниця</div>
                                <div className="event__title">
                                 <a href="/event/title">The Hardkiss | Залізна ластівка</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                                <div className="event__price">
                                    400 - 2500 грн
                                </div>
                            </div>
                        </div>

                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="7.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date">27 Серпня, 20:00 П'ятниця</div>
                                <div className="event__title">
                                    <a href="/event/title">Within Temptation | Resist Album Tour</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                                <div className="event__price">
                                    400 - 2500 грн
                                </div>
                            </div>
                        </div>
                        
                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="5.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date">27 Серпня, 20:00 П'ятниця</div>
                                <div className="event__title">
                                    <a href="/event/title">Jazzy Monk. Mar'yana Golovko And Pavlo Igor</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                                <div className="event__price">
                                    400 - 2500 грн
                                </div>
                            </div>
                        </div>

                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="6.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date">27 Серпня, 20:00 П'ятниця</div>
                                <div className="event__title">
                                    <a href="/event/title">Within Temptation | Resist Album Tour</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                                <div className="event__price">
                                    400 - 2500 грн
                                </div>
                            </div>
                        </div>

                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="3.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date">27 Серпня, 20:00 П'ятниця</div>
                                <div className="event__title">
                                    <a href="/event/title">Within Temptation | Resist Album Tour</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                            </div>
                        </div>

                        <div className="event">
                            <div className="event__img-wrapper">
                                <img src="3.jpg" alt=""/>
                            </div>

                            <div className="event__details">
                                <div className="event__date">27 Серпня, 20:00 П'ятниця</div>
                                <div className="event__title">
                                    <a href="/event/title">Within Temptation | Resist Album Tour</a>
                                </div>
                                <div className="event__place">
                                    <a href="#">клуб Малевич</a>, <a href="#">Львів</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );    
    }

};

