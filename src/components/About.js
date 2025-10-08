import React from "react";
import { image } from "../data/data";

function About(){
  return(
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer with a strong foundation in modern JavaScript frameworks 
        and a keen eye for creating responsive, user-friendly applications. I enjoy solving complex 
        problems and continuously learning new technologies to stay at the forefront of web development.I am a passionate web developer with a strong foundation in modern JavaScript frameworks 
        and a keen eye for creating responsive, user-friendly applications. I enjoy solving complex 
        problems and continuously learning new technologies to stay at the forefront of web development.</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}
export default About;
