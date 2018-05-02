import React, { Component } from 'react';

class Services extends Component {
	render(){
		return(
			<div className = "container-fluid" id="service">
				<div className = "row">
					<div className="col-lg-12 serviceBox">
							<h2 class="title">my services.</h2>
							<div className="col-md-4">
								<div className="icon">
									<img id="icon" src={require('../img/boy-broad-smile.png')} />
								</div>
								<div>
									<h4> Personal Coaching</h4>
									<p>
										Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
									</p>

									<h6 style={{textAlign: 'center', fontSize: '20px', color: 'yellow', paddingTop: '10px'}}><strong>Prices starting @ <i class="fas fa-dollar-sign"></i> 150 per session</strong></h6>
								</div>

							</div>

							<div className="col-md-4">
								<div className="icon">
									<img id="icon" src={require('../img/worker.png')}/>
								</div>
								<div>
									<h4> Career Coaching</h4>
									<p>
										Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
									</p>

									<h6 style={{textAlign: 'center', fontSize: '20px', color: 'yellow', paddingTop: '10px'}}><strong>Prices starting @ <i class="fas fa-dollar-sign"></i> 125 per session</strong></h6>
								</div>
							</div>

								<div className="col-md-4">
								<div className="icon">
									<img id="icon" src={require('../img/goal.png')} />
								</div>
								<div>
									<h4> Goal Mapping</h4>
									<p>
										Lorem ipsum dolor sit amet, at delicata recteque vel. Et ludus antiopam mei, id nam dicant scripta propriae, summo verear sed et. 
									</p>

									<h6 style={{textAlign: 'center', fontSize: '20px', color: 'yellow', paddingTop: '10px'}}><strong>Prices starting @ <i class="fas fa-dollar-sign"></i> 75 per session</strong></h6>
								</div>
							</div>

					</div>
					
					
					

				</div>

			</div>
		)
	}

};

export default Services;