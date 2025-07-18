import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Competitions.css';

const competitions = [
  {
    id: "bytebash",
    title: "ByteBash (Hackathon) Winner - Kurukshetra'25",
    description: "National-level hackathon, where we built an Adaptive Assessment System using LLM.",
    date: "Feb 2025",
    image: "images/CO1.jpg",
    certificate: "images/CO1.jpg",
    linkedin: "https://www.linkedin.com/posts/balamurugan16sa_bny-hackathon-machinelearning-activity-7311347101647441920-pUU3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOCT8MBf06xGj9-GGtGDamkJytZbUtJja8"
  },
  {
    id: "jokersgamble",
    title: "Joker's Gamble (DSA Coding Challenge) Runner - ITRIX'25",
    description: "An intense DSA coding competition testing problem-solving skills and combating challenges.",
    date: "Mar 2025",
    image: "images/CO2.jpg",
    certificate: "images/CO2.jpg",
    linkedin: "https://www.linkedin.com/posts/balamurugan16sa_coding-problemsolving-hackerrank-activity-7323382311092113409-bAMG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOCT8MBf06xGj9-GGtGDamkJytZbUtJja8"
  },
  {
    id: "inversecoding1",
    title: "Inverse Coding (DSA and Logical Coding) Runner - ITRIX'25",
    description: "A challenging reverse coding event to decode logic and structure, based on various outputs.",
    date: "Mar 2025",
    image: "images/CO3.jpg",
    certificate: "images/CO3.jpg",
    linkedin: "https://www.linkedin.com/posts/balamurugan16sa_coding-problemsolving-hackerrank-activity-7323382311092113409-bAMG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOCT8MBf06xGj9-GGtGDamkJytZbUtJja8"
  },

];

const Competitions = () => {
  const handleLinkedInClick = (link) => {
    if (!link) {
      alert("LinkedIn post coming soon!");
      return;
    }
    window.open(link, '_blank');
  };

  return (
    <Container
      fluid
      className="custom-container"
      style={{
        backgroundColor: "#131a1b",
        border: "1px solid rgba(128, 128, 128, 1)",
        borderRadius: "0.6rem",
        boxShadow: "0 0 15px rgba(128, 128, 128, 1)",
      }}
    >
      <div className="title-bar fs-4">
        <h3 className='hh d-flex align-items-center justify-content-center fs-4 fw-bold my-3'>Competitions</h3>
      </div>

      <section id="competitions" className="comp-section">
        <div className="timeline-wrapper">
          <div className="timeline-line" />
          <div className="timeline-container">
            <div className="timeline-track">
              {competitions.map((comp, index) => {
                const isTop = index % 2 === 0;
                return (
                  <div
                    key={comp.id + index}
                    className={`timeline-item ${isTop ? 'top' : 'bottom'}`}
                  >
                    <div className="timeline-content">
                      <img src={comp.image} alt={comp.title} />
                      <div className="comp-info">
                        <p className="date fs-6">{comp.date}</p>
                        <h6 className="title fs-6">{comp.title}</h6>
                        <p className="desc fs-6">{comp.description}</p>
                        <div className="btn-group fs-6">
                          <button onClick={() => window.open(comp.certificate, '_blank')}>
                            Certificate
                          </button>
                          <button onClick={() => handleLinkedInClick(comp.linkedin)} style={{backgroundColor: "rgba(255, 255, 255, 0.3)", borderColor: "rgba(255, 255, 255, 0.3)"}}>
                            LinkedIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Competitions;
