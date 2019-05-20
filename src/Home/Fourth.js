import React from 'react';
import ShopButton from '../Components/ShopButton';

export default class Fourth extends React.Component {

    render() {
        return (
             <div className="fourth">
                <iframe height="315" src="https://www.youtube-nocookie.com/embed/bjIR8pBboBE?rel=0&amp;showinfo=0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div className="fourth-small-text">
                    <ul>
                        <li>Simple progressive steps to ensure success.</li>
                        <li>Stitching techniques to help you continue Temari on your own.</li>
                        <li>Beginning, Intermediate, and Advanced techniques.</li>
                        <li>Screen captions emphasizing important tips.</li>
                    </ul>
                </div>
                <ShopButton text={"BUY NOW"} />
             </div>
        );
    }
}