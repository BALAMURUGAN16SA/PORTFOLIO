import React, { useState } from "react";
import "../styles/Technologies.css";

const techData = [
  {
    title: "Python",
    icon: "images/PY1.png",
    items: [
      { name: "Tkinter", icon: "images/TK1.png", desc: "Tkinter Library is used to build programs with UI" },
      { name: "Django", icon: "images/DJ1.svg", desc: "Django Framework helps to build scalable webapps" },
      { name: "Flask", icon: "images/FL1.png", desc: "Flask Framework helps to connect FrontEnd with BackEnd" },
      { name: "BS4", icon: "images/BS1.png", desc: "BeautifulSoup is used to perform WebScrapings" },
      { name: "Numpy", icon: "images/NP1.png", desc: "NumPy is used to solve complex Linear Algebra" },
      { name: "Pandas", icon: "images/PD1.png", desc: "Pandas is used to manipulate DataSets" }
    ]
  },
  {
    title: "FrontEnd",
    icon: "images/FE1.png",
    items: [
      { name: "HTML", icon: "images/HT1.png", desc: "HTML - The fundamental of every Website" },
      { name: "CSS", icon: "images/CS1.png", desc: "CSS Style Sheets are used to Style the Pages" },
      { name: "BootStrap", icon: "images/BT1.png", desc: "BootStrap is a CSS Framework to ease the task of styling" },
      { name: "React", icon: "images/RC1.png", desc: "React is a JavaScript library for building fast, interactive user interfaces using reusable components" },
      { name: "JS", icon: "images/JS1.png", desc: "JS makes the website dynamic" }
    ]
  },
  {
    title: "BackEnd",
    icon: "images/BE1.png",
    items: [
      { name: "SQL", icon: "images/SQ1.png", desc: "SQL manages, queries, and manipulates relational databases" },
      { name: "XAMPP", icon: "images/XA1.png", desc: "XAMPP is a cross-platform web server solution" },
      { name: "Django", icon: "images/DJ1.svg", desc: "Django Framework helps to build scalable webapps" },
      { name: "Flask", icon: "images/FL1.png", desc: "Flask Framework helps to connect FrontEnd with BackEnd" }
    ]
  }
];

const Technologies = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (index) => {
    setActiveKey(activeKey === index ? null : index);
  };

  return (
    <section className="technology" id="technology">
      <div className="tech-container">
        <h3 className="hh fs-4 fw-bold my-3" style={{ 
              color: "antiquewhite",
              margin: "1rem"
            }}> Technologies
        </h3>
        <div className="accordion">
          {techData.map((category, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`accordion-button ${activeKey === index ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <img src={category.icon} alt={category.title} className="accordion-icon" />
                <span className="accordion-title fs-5 fw-bold">{category.title}</span>
                <span className="accordion-indicator fs-2 fw-bold">{activeKey === index ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeKey === index ? 'show' : ''}`}>
                <ul className="accordion-list">
                  {category.items.map((tech, techIndex) => (
                    <li className="tech-row fs-5" key={techIndex}>
                      <div className="col col-name fs-5">{tech.name}</div>
                      <div className="col col-img">
                        <img src={tech.icon} alt={tech.name} />
                      </div>
                      <div className="col col-desc">{tech.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;