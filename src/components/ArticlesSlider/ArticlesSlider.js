import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ArticlesSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            className: 'slider-field',
            arrows: false,
            centerMode: true,
        }
        return (
            <div className="slider-field">
                <div className="hide-on-mobile">
                    <div className="line"></div>
                    <Slider {...settings} className="slider">
                        <div>
                            <img src="/images/france1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/images/france2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/images/italy1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/images/spain2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/images/spain1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/images/portugal2.jpg" alt="" />
                        </div>
                    </Slider>
                    <div className="line"></div>
                </div>
            </div>
        )
    }
}
