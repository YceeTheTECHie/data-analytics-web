import React from 'react';
import { Link } from 'react-router-dom';	
const Navbar = ({onClick}) => (

  <header>
		<nav id="main-navbar" class="navbar  navbar-fixed-top">
			<div class="container-fluid navbar-container">
				<div class="navbar-header">
					<a class="logo-text navbar-brand" href="/">Data Analytics</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a  href="/">Home</a></li>
						<li><Link to="/articles">Resources</Link></li>
					{/* <li><a onClick={onClick} href="/">About Us</a></li>
						<li><a href="/">Contact Us</a></li> */}
                        {/* <li><a href="#">Careers</a></li> */}
					</ul>
				</div>
			</div>
		</nav>
	</header>
)


export default Navbar;