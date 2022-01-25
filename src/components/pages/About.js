import React from "react";
import ProfilePic from '../../images/ProfilePic.JPG'

function About() {
  return (
    <div class="row m-3 border-bottom border-top border-dark justify-content-center">

      <div class="col-12 col-lg-3 m-3 d-flex justify-content-center">
        <img src={ProfilePic} class="img-fluid profile-pic" alt="Profile Pic"></img>
      </div>

      <div class="col-12 col-lg-8 d-flex flex-column justify-content-center">

        <h1 class="text-center">About Me</h1>

        <p class="border border border-2 p-height p-3">
          Hello all! Welcome to my personal portfolio page. I made it from scratch using React and Bootstrap. Here's a few facts 
          about me: My name is Garrett. I am 23 years old and I live in Metro Atlanta, and if you weren't able to tell already, 
          I'm an aspiring Web Developer! My journey so far has been nothing but great. I was introduced to the idea of Web Development 
          as an occupation by a friend. As I started self-learning how to code, I quickly fell in love with it. 
          I liked it so much that I decided to take the next step, and enrolled in GA Tech's Full Stack Coding Bootcamp!
          <br></br><br></br>
          With the instructor's help I've learned many powerful development skills such as: JavaScript, Node.js, Express.js, 
          RESTful Api's, graphQL, Bootstrap, HTML, CSS, MySQL, MongDB, and as you can see from this page, REACT! I'm enjoying 
          the journey of learning and am eager for my first job in the feild. 
          <br></br><br></br>
          If you want to see the accomplishments I'm most proud of, check out the Projects tab.
          And if you want to reach me, check out my resume, or see my other projects on Github, check out the links in the footer.
        </p>
      </div>
    </div>
  )
};

export default About;