import React from 'react';
import { Link } from 'react-router-dom';	
const Navbar = () => (

  <header>
		<nav id="main-navbar" className="navbar  navbar-fixed-top">
			<div className="container-fluid navbar-container">
				<div className="navbar-header">
					<a className="logo-text navbar-brand" href="/">Data Analytics</a>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a  href="/">Home</a></li>
						<li><Link to="/articles">Resources</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
)


export default Navbar;