import React from "react";
import '../CSS/Footer.css'

const Footer = ()=>{
    return(
        <>
            <div className="Footer">
                <div className="logo">
                    <h1>BlogCheck</h1>
                    <p className="copyright">Copyright © Rajesh Nagar</p>
                </div>
                <div className="the_school">
                   <h3>BlogCheck</h3>
                   <p>About Us</p>
                   <p>Privacy Policy</p>
                   <p>Terms & Condition</p>
                </div>
                <div className="the_school">
                   <h3>PRODUCTS</h3>
                   <p>Courses</p>
                   <p>Try courses for Free</p>
                   
                </div>
                <div className="the_school">
                   <h3>COMMUNITY</h3>
                   <p>Blog</p>
                   <p>Affiliate</p>
                   
                </div>
                <div className="the_school">
                   <h3>FOLLOW US ON</h3>
                    <div className="icons">
                    <i className="fa fa-2x fa-facebook"></i>
                    <i className="fa fa-2x fa-twitter"></i>
                    <i className="fa fa-2x fa-youtube"></i>
                    <i className="fa fa-2x fa-linkedin"></i>
                    </div>
                   <h3 className="contactus">CONTACT US</h3>
                   <p><i className="fa fa fa-phone"></i>  1800-123-3598</p>
                   <p><i className="fa fa fa-envelope"></i>  contact@gmail.com</p>
                    
                </div>
            </div>
        </>
        )}
export default Footer ;