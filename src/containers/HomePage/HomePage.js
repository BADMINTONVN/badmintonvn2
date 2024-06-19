import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import Tournaments from './Section/Tournaments';
import Courses from './Section/Courses';
import Shops from './Section/Shops';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';

class HomePage extends Component {

    render() {

        return (
            <div>
                <HomeHeader />
                <Specialty />
                <Tournaments />
                <Courses />
                <Shops />
                <About />
                <HomeFooter />
                <div style={{ height: '300px' }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
