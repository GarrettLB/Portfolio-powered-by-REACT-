import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div>
      <section class="row m-3 justify-content-around">
        
        <nav class="d-flex">
            <h6 class="text-center p-3">Thanks for viewing my page! Check out my links</h6>
            <div class="col-2 d-flex justify-content-center">
                <a href="mailto:garrettleebryan@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size='2x'/></a>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <a href="https://github.com/GarrettLB" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/garrett-bryan-8027231b4" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            </div>
        </nav>
      </section>
    </div>
  )
};

export default Footer;