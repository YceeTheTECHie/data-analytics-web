import React from 'react';
import dataimg from '../images/use.svg'
const Main = () => (
    <section className="container-fluid main">
        <div className="row firstarea">
            <div className="col-sm-7 text">
            <h2>We help you get meaningful data to boost your business  analytics asap!</h2>
            </div>
        <div className="col-sm-5">
            <img src = {dataimg} className="hero-img" alt = "hero"/>
            </div>
            </div>
    </section>

);
export default Main;