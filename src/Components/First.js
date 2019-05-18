import React from 'react';

export default class First extends React.Component {

    render() {
        return (
            <div className="first">
             <div className="first-large-text">
             The gift of Temari
             </div>
            <div className="first-medium-text">
            The Art of Japanese Thread Balls
            </div>
            <div className="first-small-text">
            <strong>Welcome to Temari!</strong><br/> We are so glad that you are here to explore the ancient tradition of Japanese Thread Balls. We offer books, DVD, and individual stitching patterns. 
            </div>
            <div className="first-small-text">
            Join the fun with Temari!
            </div>
            <button className="shop-button">
            SHOP NOW
            </button>
            </div>
        );
    }
}