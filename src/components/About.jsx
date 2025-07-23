import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="details" id="details">
      <h2 className="typed-text p-3 fs-3 fw-bold">Hi! I am Balamurugan..</h2>
      <p className="additional-text fs-6">
        Currently pursuing B.E. in Computer Science and Engineering at the College of Engineering, Guindy.
        <br></br>
        I am a <span className="fw-bold" style={{color: "#128C7E"}}>Full-stack</span> & <span className="fw-bold" style={{color: "#7B61FF"}}> LLM Applications </span> developer specializing in <span className="fw-bold" style={{color:"#61DBFB"}}> React </span> frontend, <span className="fw-bold" style={{color:"#3776ab"}}> Pyt</span><span className="fw-bold" style={{color: "#ffd343"}}>hon </span> backend development and integrating 
        <br></br>
        <span className="fw-bold" style={{color: "#7B61FF"}}>LLMs</span> into real-world apps.
        <br></br>
        <br></br>
        Outside tech, I enjoy remixing tracks in DAWs — giving familiar tunes my own twist.
        <br></br>
        <br></br>
        Let's connect if you’d like to talk tech or collaborate on cool ideas!
      </p>
    </div>
  );
};

export default About;
