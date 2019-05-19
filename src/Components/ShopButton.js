import React from 'react';

export default class ShopButton extends React.Component {

    render() {
        return (
            <button className="shop-button">
            <div>{this.props.text}</div>
            </button>
        );
    }
}