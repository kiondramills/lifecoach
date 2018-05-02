import React, { Component } from 'react';


class Nav extends Component {
	render(){
		return (

			<div className="row navbar-fixed">
				<nav>
				    <div className="nav-wrapper">

				    	<div className="col s6">
				    		 <a href="#main-top" class=" center mylogo">JAKE HENDERSON | LIFE COACH</a>
				    	</div>
				     	<div className="col s6">
				     		<ul id="nav-mobile" class="right hide-on-med-and-down">
					        <li><a href="#main-top" class="navy">home</a></li>
					        <li><a href="#aboutme" class="navy">about</a></li>
					        <li><a href="#myservices" class="navy">services</a></li>
					        <li><a class="navy" href="#contactme">contact me</a></li>

					      	
					      </ul>
				     	</div>
					      
				    </div>
				</nav>
        		
			</div>
		)
	}

};

export default Nav;
