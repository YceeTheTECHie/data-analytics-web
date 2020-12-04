import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
            <Link className="resources" to="/">Home</Link>
        
            <Link className ="resources" to ="/articles">Resources</Link></div>
        <p className="footer-text">&copy; Data Analytics {new Date().getFullYear()}</p>
    </div>
);


};

export default Footer;