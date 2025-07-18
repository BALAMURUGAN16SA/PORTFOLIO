import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Certifications.css';

const certifications = [
  {
    id: "adpp",
    title: "Advanced Diploma in Python and CPP Programming (ADPP)",
    date: "Nov 2022",
    description:
      "Covered advanced concepts in both Python and C++, including OOP, file handling, STL, and system-level programming.",
    certificate: "images/C1.jpg"
  },
  {
    id: "dsa",
    title: "Udemy - Mastering Data Structures and Algorithms",
    date: "Mar 2025",
    description:
      "Focused on recursion, trees, graphs, and dynamic programming with real-world interview coding questions.",
    certificate: "images/C2.jpg"
  }
];

const Certifications = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Container
      fluid
      className="custom-container mt-4"
      style={{
        backgroundColor: "#131a1b",
        border: "1px solid rgba(128, 128, 128, 1)",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(128, 128, 128, 1)",
      }}
    >
      <div className="title-bar">
        <h3 className="hh hhf d-flex align-items-center justify-content-center fs-4 fw-bold my-3">
          Certifications
        </h3>
      </div>

      <section id="certifications" className="cert-section">
        <div className="cert-grid mt-3 mb-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`cert-card flip-card ${flipped[cert.id] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(cert.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlip(cert.id);
                }
              }}
              aria-pressed={flipped[cert.id] ? "true" : "false"}
              aria-label={`Certification card ${index + 1}: ${cert.title}. Tap to flip.`}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="serial-number fs-3">{index + 1}.</div>
                  <div className="cert-info">
                    <h6 className="title fs-6">{cert.title}</h6>
                    <p className="date fs-6">{cert.date}</p>
                  </div>
                  <button
                    className="cert-button fs-6"
                  >
                    View Certificate
                  </button>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="cert-description fs-6">{cert.description}</p>
                  <button
                    className="cert-button mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.certificate, '_blank');
                    }}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Certifications;
