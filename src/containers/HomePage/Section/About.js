import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';


class About extends Component {

    render() {


        return (
            <div className="section-about">
                <div className='about-header'>
                    TRUYỀN THÔNG NÓI VỀ BADMINTON VN
                </div>
                <div className='about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="450px"
                            src="https://www.youtube.com/embed/2oru6xZlnmg"
                            title="Từ VĐV boxing chuyển sang VĐV cầu lông, Lê Đức Phát giành luôn vé di thi Olympic | VTV24"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>

                    <div className='content-right'>

                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
