import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="details" id="details">
      <h2 className="typed-text p-3 fs-3 fw-bold">Hi! I am Balamurugan..</h2>
      <p className="additional-text fs-6">
        I'm currently pursuing a B.E. in Computer Science and Engineering at the College of Engineering, Guindy.
        I’m passionate about Python and its libraries like Django, Flask, Tkinter, NumPy, and Pandas, and have built several projects applying them.
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