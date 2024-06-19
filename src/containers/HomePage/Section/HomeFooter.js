import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';


class HomeFooter extends Component {

    render() {
        

        return (
            <div className="section-HomeFooter">
               
                <p>&copy; 2024 BADMINTON VN. More information, please visit our team!   
                     <a target='_blank' href='https://www.youtube.com/@bwftv'> 
                      &#62; click here &#60;
                   </a>
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
