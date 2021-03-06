import React from 'react';

export default class Reason extends React.Component {

    render() {
        return (
             <div className="reason-box">
                <img className="image-frame" src={this.props.img} alt={this.props.alt} />
                 <div className="reason-title">
                 {this.props.title}
                 </div>
                 <div className="reason-description">
                 {this.props.description}
                 </div>
             </div>
        );
    }
}