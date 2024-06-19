import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className="home-header-container">
                        <div className="home-header-content">

                            <div className="left-content">

                                <i className="fas fa-bars"></i>

                                <div className="header-logo"></div>
                            </div>

                            <div className="center-content">

                                <div className="child-content">
                                    <div><b>SÂN CẦU LÔNG</b></div>
                                    <div> Tìm sân theo khu vực</div>
                                </div>

                                <div className="child-content">
                                    <div><b>SHOP ĐỒ THỂ THAO</b></div>
                                    <div> Sản phẩm khuyến mãi</div>
                                </div>

                                <div className="child-content">
                                    <div><b>LỚP HỌC CẦU LÔNG</b></div>
                                    <div> Tìm lớp học theo yêu cầu</div>
                                </div>

                                <div className="child-content">
                                    <div><b>GIẢI ĐÂU CẦU LÔNG</b></div>
                                    <div> Đăng ký tham gia giải đấu</div>
                                </div>

                            </div>

                            <div className="right-content">

                                <i class="far fa-question-circle"></i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">

                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
