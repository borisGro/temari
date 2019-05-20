import React from 'react';
import threeballs from '../img/threeBalls.jpg';

export default class Fifth extends React.Component {

    render() {
        return (
             <div className="fifth">
                <div className="second-large-text">
                Sign up to receive the latest Temari tips and new pattern designs.
                </div>
                <img className="threeballs" src={threeballs} alt="temari balls" />
             </div>
        );
    }
}