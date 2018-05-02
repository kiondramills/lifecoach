import React, { Component } from 'react';

class Contact extends Component {
	render(){
		return(

			<div className="container-fluid" id="contact">
				
				<div className="row">

					<div className="col-md-4 contactInfoBox" >
						<h3 style={{paddingTop: '30%', textAlign: 'center'}}>contact me.</h3>
						<div>
							<a href="#" className="info"><i class="fas fa-phone-square"></i> 720.339.1217</a>
							<br/>
						</div>
						<div>
							<a href="#" className="info"><i class="fas fa-map-marker-alt"></i> 1315 Black St. Suite 210                      <br/> Denver, CO 80205</a>
							<br/>
						</div>
						<div>
							<a href="#" className="info"> </a>
						</div>
						<div>
							<a href="#" className="info"><i class="fas fa-envelope-open"></i> hello@ninarose.com </a>
							<br/>
						</div>
						
						<div>
							<br />
							<a href="#" className="social"><i class="fab fa-facebook-square"></i></a>
							<a href="#" className="social"><i class="fab fa-instagram"></i></a>
							<a href="#" className="social"><i class="fab fa-twitter"></i></a>

						</div>
					</div>

					<div className="col-md-2">
						
					</div>

					<div className="col-md-6 contactForm">
						<div className="container">
							<h5 style={{ color: 'yellow'}}>share your info.</h5>
							<div class="row">
						    <form>
							  <div class="form-group">
							    <label for="formGroupExampleInput">Your Full Name.</label>
							    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your full name." style={{ backgroundColor: 'white'}}/>
							  </div>
							  <div class="form-group">
							    <label for="formGroupExampleInput2">Your Email.</label>
							    <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email address" style={{ backgroundColor: 'white'}}/>
							  </div>
							  <div class="form-group">
							    <label for="formGroupExampleTextArea">Message.</label>
							    <textarea type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your message." style={{height: '150px'}}></textarea>
							  </div>
							  <button type="submit" class="btn btn-primary" id="submit">Submit</button>
							</form>
					  </div>
						</div>
					</div>


				</div>
			</div>

		)
			
		
	}

};

export default Contact;