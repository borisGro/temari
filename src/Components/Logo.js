import React from 'react';
import logo from '../img/Temari-logo.gif'

export default class Logo extends React.Component {


    render() {
        return (
            <div className="logo">
                 <img src={logo} alt="logo" />
            </div>
        );
    }
}