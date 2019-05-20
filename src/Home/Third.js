import React from 'react';
import Thirdbox from './Thirdbox';
import treasures from '../img/treasures.jpg';
import bookvid from '../img/booksVideo.jpg';
import patterns from '../img/temariPatterns.jpg';

export default class Second extends React.Component {

    render() {
        return (
            <div className="third">
            <Thirdbox 
            img={treasures}
            alt={"treasures"}
            title= "Temari Treasures Book"
            description= "Temari Treasures offers novice to expert stitchers numerous ball and stitching patterns to explore. Discover how to make crystal stars, wave, flowers, and much more with easy to follow detailed instructions."
            button= "BUY NOW"
            />
            <Thirdbox
            img={bookvid}
            alt={"temari books"}
            title= "Books and Video Training"
            description= "Various patterns are readily accessible along with inexpensive materials, making it easy for all stitchers to be successful. Clear and easy to follow instructions are provided in English."
            button= "SHOP NOW"
            />
            <Thirdbox
            img={patterns}
            alt={"temari patterns"}
            title= "Individual Patterns - Soon!"
            description= "For new Temari creativity, I offer individual Temari stitching patterns and instructions that can be easily downloaded. Try a new pattern and enjoy the fun."
            button= "COMING SOON"
            />
            </div>
        );
    }
}