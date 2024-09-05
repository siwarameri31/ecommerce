import React from 'react';
import './About.css' ;

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are a team of dedicated professionals committed to providing the best services to our customers. Our mission is to deliver exceptional value and innovative solutions in our field.
            </p>
            <p>
                Our team has years of experience and expertise, and we are passionate about helping our clients achieve their goals. We believe in a customer-centric approach and strive to exceed expectations with every project we undertake.
            </p>
            <p>
                Thank you for visiting our website. If you have any questions or would like to learn more about our services, feel free to <a href="/contact">contact us</a>.
            </p>
        </div>
    );
};

export default About;
