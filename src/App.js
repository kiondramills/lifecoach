import React, { Component } from 'react';

import './App.css';

import Nav from './components/Nav';
import About2 from './components/MyAbout';
import Services from './components/Services';
import Hero from './components/Hero';
import Contact from './components/Contact';



class App extends Component {

  constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://gcs-vimeo.akamaized.net/exp=1525246698~acl=%2A%2F722729201.mp4%2A~hmac=fc82f9afdfd7996a3eeadae9f150c6440bb05e2154676219208d4a146f9620d4/vimeo-prod-skyfire-std-us/01/2148/8/210741555/722729201.mp4'
        }
    }
 
  render() {

    return (
      <div className="App">
          
          <div className="main-top" id="main-top">
            <Nav />

            

             <div class="main-box"> 

              
                  <div class="jumbotron jumbotron-fluid" id="myjumbo">

                      <video id="background-video" loop autoPlay>
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoURL} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video> 
                    <div class="container">
                      <h1 class="display-4">unleash the possibilities</h1>
                      <p class="lead">Imagine living the life you always dreamed of.</p>
                      <a id="learnBtn" class="waves-effect btn custom" style={{height: '60px', width: '150px', paddingTop: '1.5%' , backgroundColor: 'rgba(255,255,255, .9)', borderRadius: '25px', fontSize: '18px', color: '#01579b'}} href="#">book now.</a>
                    </div>

                  </div>

              </div>

          </div>
        
        
          <section id="aboutme">

            <About2  />

          </section>
          
        
                
         
        
       
         <section id="myservices">
    
              <Services />

        </section>

        <section id="contactme">
              
              <Contact />
              
        </section>

        
        <div id="footer"> 2018. All rights reserved. Website Developed by Techjoy Unlimited. </div>
        </div>
      
    );
  }
}

export default App;

