import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Shops.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Shops extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2
        };

        return (
            <div className="section-shop">

                <div className="shop-content">
                    <div className="court-header">
                        <span className="title-court"> SHOP NỔI BẬT</span>
                        <button className="button-court"> Xem thêm </button>
                    </div>

                    <Slider {...settings}>
                        <div className="img-customize1">
                            <div className="img-court1" />
                            <div className='position'>SHOP YONEX</div>
                        </div>
                        <div className="img-customize2">
                            <div className="img-court2" />
                            <div className='position'>SHOP LI NING</div>
                        </div>
                        <div className="img-customize3">
                            <div className="img-court3" />
                            <div className='position'>SHOP VICTOR</div>
                        </div>
                        <div className="img-customize4">
                            <div className="img-court4" />
                            <div className='position'>SHOP VNB</div>
                        </div>
                        <div className="img-customize5">
                            <div className="img-court5" />
                            <div className='position'>SHOP SÀI GÒN</div>
                        </div>
                        <div className="img-customize6">
                            <div className="img-court6" />
                            <div className='position'>SHOP BÌNH CHÁNH</div>
                        </div>
                    </Slider>

                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
