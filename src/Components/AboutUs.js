import React from 'react';
import dataimg from '../images/use.svg'

const AboutUs = () => (
    
    <section  className="container-fluid about-us">
        <div className="row">
            <div className="col-sm-6">
            <img src = {dataimg} className="hero-img-about" alt = "hero"/>
            </div>
            <div className="col-sm-6">
                <h3 className="about-us">About Us</h3>
                <p className="about-content">We grow multifunctional customer service through team driven scenarios. Rapidiously disintermediate end-to-end <br/> e-business after goal-oriented partnerships.  Professionally incentivize scalable expertise before strategic intellectual.</p>
            </div>
        
            </div>
    </section>

);

export default AboutUs;