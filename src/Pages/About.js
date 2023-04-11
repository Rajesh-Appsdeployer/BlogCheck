import React from "react";
import '../CSS/About.css';
import image from '../Images/coder.webp';
 
const About = () => {
    return (
        <>
            <div className="About">
                <div className="Head">
                    <div className="Title">
                        <h1>About Us</h1>
                    </div>
                    
                </div>
                <div className="Contain">
                    
                <div className="Description">
                        <h3>Our Story</h3>
                        <p className="p1">At BlogCheck, our mission is to continuously innovate the best ways to train the next generation of developers and to transform the the way tech education is delivered.</p>
                        <p className="p2">The BlogCheck was founded in 2016 to bridge the knowledge gap between colleges and industry. Founded by Ankush Singla, Kannu Mittal and Dhawal Parate, The School boasts of world-class teaching faculty and a state-of-art learning platform for Coding education with faculty alumni of IIT, Stanford, IIIT and Facebook. The School teaches 17+ Programming courses in Foundation,l Advanced, Data & Development courses such as Machine Learning, Data Science, Web Development, Android and more. Today, The School ecosystem comprises of 40,000+ students and alumni, 1000+ Campus Ambassadors, 2000+ Teaching Assistants, and 150+ employees.</p>
                    </div>
                    <div className="image">
                     
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;