import React from "react";
import ProfilePic from '../../images/ProfilePic.JPG'

function About() {
  return (
    <div class="row m-3 border-bottom border-top border-dark justify-content-center">
      
      <h1 class="text-center">About Me</h1>

      <div class="col-12 col-lg-3 m-3 d-flex justify-content-center">
        <img src={ProfilePic} class="img-fluid profile-pic" alt="Profile Pic"></img>
      </div>

      <div class="col-12 col-lg-8 d-flex flex-row">
        <p class="border border border-2 p-height p-3">
          Hello all! Heres a few facts about me: My name is Garrett. I am currently 22 years old and I live in a Metro-Atlanta city in Georgia called Marietta. 
          I graduated early from highschool at 16 and took a 2 year Welding and Joining Technologies course at Chattahoochee Tech at 17. 
          In my spare time I pursue weight lifting and sports, as well as participate in volunteer work. 
          And although not very physical like my other interests, I've always been interested in computers!
          <br></br>
          My last several jobs over the years have all been in the contruction feild. 
          I've held several different positions, with a wide range from general construction, to grading, to framing, to welding, to electrical.
          But it's time for a change! I was introduced to the idea of Web Development as an occupation by a friend. I started self-learning how to code and quickly fell in love with it. 
          I liked it so much that I decided to take the next step, and enrolled in GA Tech's Full Stack Coding Bootcamp! 
          I'm enjoying the journey of learning and am eager for my first job in the feild. 
          <br></br>
          If you want to see the accomplishments I'm most proud of, check out the Projects section.
          And if you want to reach me, check out my resume, or see my other projects on Github, check out the Contact-me section.
        </p>
      </div>
    </div>
  )
};

export default About;