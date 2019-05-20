import React from 'react';
import Reason from '../Components/Reason'

export default class Second extends React.Component {

    render() {
        return (
            <div className="second">
             <div className="second-large-text">
             Discover TEMARI 
             </div>
             <div className="second-reg-text">
             Unique in so many ways, TEMARI is one of the most satisfying, soothing, yet profoundly rewarding forms of needlecraft. Of Japanese origin, Temari was traditionally a gift given to symbolize perfection, deep friendship, and loyalty. Today, Temari are enjoyed not only for their tradition but also as beautiful, elegant, intricate, fun and awe-inspiring ornamental art.
             </div>
            <Reason 
            title= "Everyone Can Do It"
            description= "Temari opens new territories for novice to expert stitchers to explore. It hypnotically engages everyone, both male and female, into a journey of discovery."
            />
            <Reason
            title= "Elegantly Simple"
            description= "Various patterns are readily accessible along with inexpensive materials, making it easy for all stitchers to be successful. Clear, lavishly illustrated, and easy to follow instructions are provided in English."
             />
            <Reason
            title= "Compelling Exploration"
            description= "Temari brings the thrill of new surprises and the joy of accomplishment with each creation. Each ball is like a great book. You can’t put it down. It will keep you in suspense and in an unparalleled sense of adventure."
             />
            <Reason
            title= "Get Inspired"
            description= "Temari will offer new techniques with each unique design. Take a look at our gallery for samples and individual patterns."
             />
            <div className="second-large-text">
             Start your Temari Experience Today!
             </div>
            </div>
        );
    }
}