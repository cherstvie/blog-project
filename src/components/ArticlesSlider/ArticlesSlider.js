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
            <div className="hide-on-mobile">
                <div className="line"></div>
                <Slider {...settings}>
                    <div>
                        <img src="/images/ferrari.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/mercedes.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/astonmartin.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/ferrari.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/mercedes.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/astonmartin.jpg" alt="" />
                    </div>
                </Slider>
                <div className="line"></div>
            </div>
        )
    }
}
