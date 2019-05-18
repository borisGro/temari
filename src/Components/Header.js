import React from 'react';
import Logo from './Logo';

export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
             <Logo />
            </div>
        );
    }
}