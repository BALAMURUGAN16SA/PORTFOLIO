import React, { useEffect } from "react";
import { Container, Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Projects.css"; 

const projects = [
  {  
    id: "apnp",
    title: "AI-Powered Nutrient Deficiency Detection and Improvement with Food Suggestions and Goal Tracking - APNP",
    date: "Feb 2025 - Startify Hackathon Finalist",
    tech: "React | Django | Streamlit | Gemini | Twilio",
    description: "An AI-powered system that analyzes symptoms to identify nutrition deficiencies.It recommends meals, sets nutrient goals, and tracks progress over time.",
    links: [
      { label: "Github", url: "https://github.com/BALAMURUGAN16SA/AI_Powered_NutriSupport.git" },
      { label: "View Project", url: "https://drive.google.com/file/d/17nf1s8ljWITj304VAytsIYH42l7L4I_e/view?usp=drivesdk" }
    ],
    image: "images/PIC1.png",
    deployed: false
  },
  {
    id: "chatpdfs",
    title: "ChatPDF - RAG on PDF, with OCR support",
    date: "Jul 2025",
    tech: "Tesseract | Langchain | Faiss | Streamlit | Gemini ",
    description: "AI & RAG powered PDF analyzer with context-aware chatbot, semantic search, and document Q&A using Gemini and LangChain.",
    links: [
      { label: "Github", url: "https://github.com/BALAMURUGAN16SA/ChatPDF.git" },
      { label: "Live App", url: "https://balamurugan16sas-chatpdfs.streamlit.app/"},
      { label: "Demo Video", url: "https://drive.google.com/file/d/19nbqXjnFE1eLDlkEjwbKF35S6iNC4aOB/view?usp=drivesdk" }
    ],
    image: "images/PIC2.png",
    deployed: true
  },
  {
    id: "movieapp",
    title: "Movie Ticket Booking System",
    date: "May 2024",
    tech: "React | Flask | Postgres | Bootstrap",
    description: "Built a booking system with user registration, ticket booking, and seat selection. Admin panel for theater management.",
    links: [
      { label: "Github", url: "https://github.com/BALAMURUGAN16SA/MOVIE_TICKETS_BOOKING/blob/updated" },
      { label: "Live App", url: "https://movie-tickets-booking-balamurugan16sas-projects.vercel.app/"},
      { label: "Demo Video", url: "https://drive.google.com/drive/folders/16VhZIcVPA2lbiQQFT-74fzWj9d_jyYY9" }
    ],
    image: "images/PIC3.png",
    deployed: true
  },
  {
    id: "ptcc",
    title: "Python-to-C++ Converter",
    date: "Jul 2024",
    tech: "Lex & Yacc | C++",
    description: "Built a Python-to-C++ Converter using Lex & Yacc, supporting functions, loops, and conditionals.",
    links: [
      { label: "Github", url: "https://github.com/Kris-05/Python-to-Cpp.git" },
      { label: "View Project", url: "https://drive.google.com/file/d/1im8iIbC9sXzruylLwX_nygQazFxKYBCG/view?usp=drivesdk" }
    ],
    image: "images/PIC4.png",
    deployed: false
  },
  {
    id: "gui",
    title: "GUI Apps using Tkinter",
    date: "Feb 2024",
    tech: "Python | Tkinter | API",
    description: "Developed three Python GUI applications using Tkinter: a To-Do List, a Weather Forecast app, and a Calculator.",
    links: [
      { label: "Github", url: "https://github.com/BALAMURUGAN16SA/GUI_TKINTER.git" },
      { label: "View Project", url: "https://drive.google.com/drive/folders/1-DChbE4SCaPun6bWZWIgv3wy4vfeKRX3" }
    ],
    image: "images/PIC5.png",
    deployed: false
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    date: "Jul 2024",
    tech: "React | Bootstrap | JS",
    description: "That's what you are looking at!",
    links: [
      { label: "Github", url: "https://github.com/BALAMURUGAN16SA/balamurugan16sa.github.io.git" },
      { label: "Live App", url: "#" }
    ],
    image: "images/PIC6.png",
    deployed: true
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoScroll, setAutoScroll] = React.useState(true);
  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'deployed' 
    ? projects.filter(project => project.deployed) 
    : projects;

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveIndex(0);
  };

  const handleNavigation = (direction) => {
    const newIndex = direction === 'prev' 
      ? (activeIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (activeIndex + 1) % filteredProjects.length;
    handleSelect(newIndex);
  };

  useEffect(() => {
    let interval;
    if (autoScroll && filteredProjects.length > 0) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [autoScroll, filteredProjects.length]);

  useEffect(() => {
    let params;
    
    if (window.location.hash.includes('?')) {
      const hashParts = window.location.hash.split('?');
      params = new URLSearchParams(hashParts[1]);
    } else {
      params = new URLSearchParams(window.location.search);
    }
    
    const id = params.get("id");
    if (id) {
      const index = projects.findIndex((p) => p.id === id);
      if (index !== -1) {
        setActiveIndex(index);
        const project = projects[index];
        if (filter === 'deployed' && !project.deployed) {
          setFilter('all');
        }
      }
    }
  }, [filter]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('?')) {
        const hashParts = window.location.hash.split('?');
        const params = new URLSearchParams(hashParts[1]);
        const id = params.get("id");
        if (id) {
          const index = projects.findIndex((p) => p.id === id);
          if (index !== -1) {
            setActiveIndex(index);
            const project = projects[index];
            if (filter === 'deployed' && !project.deployed) {
              setFilter('all');
            }
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [filter]);
  
  return (
    <div className="projects" id="projects" style={{
      backgroundColor: "#222",
      border: "1px solid rgba(128, 128, 128, 1)",
      borderRadius: "10px",
      boxShadow: "0 0 15px rgba(128, 128, 128, 1)",
      margin: "20px 0",
      overflow: "hidden"
    }}>
      <div style={{
        backgroundColor: "#000",
        padding: "15px 20px",
        borderBottom: "1px solid rgba(255, 255, 255, 1)"
      }}>
        <Container>
          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="hhp fs-4 fw-bold" style={{
                color: "antiquewhite",
                margin: 0
              }}>
                Projects
              </h3>
              <div className="d-flex align-items-center">
                <span className="me-2" style={{
                  color: "antiquewhite",
                  fontSize: "0.8rem",
                  backgroundColor: "rgba(7, 94, 84, 0.3)",
                  padding: "0.4rem 0.6rem",
                  borderRadius: "15px",
                  border: "1px solid #128C7E"
                }}>
                  {activeIndex + 1}/{filteredProjects.length}
                </span>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleNavigation('prev')}
                  className="me-1"
                  style={{
                    color: "#128C7E",
                    borderColor: "#128C7E",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0
                  }}
                >
                  <i className="bi bi-chevron-left" />
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleNavigation('next')}
                  style={{
                    color: "#128C7E",
                    borderColor: "#128C7E",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0
                  }}
                >
                  <i className="bi bi-chevron-right" />
                </Button>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-center">
              <Button
                onClick={() => handleFilterChange('all')}
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "12px",
                  border: "1px solid #128C7E",
                  backgroundColor: filter === 'all' ? "#128C7E" : "transparent",
                  color: filter === 'all' ? "#fff" : "#128C7E",
                  transition: "all 0.3s ease"
                }}
              >
                All ({projects.length})
              </Button>
              <Button
                onClick={() => handleFilterChange('deployed')}
                className={`filter-btn ${filter === 'deployed' ? 'active' : ''}`}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "12px",
                  border: "1px solid #128C7E",
                  backgroundColor: filter === 'deployed' ? "#128C7E" : "transparent",
                  color: filter === 'deployed' ? "#fff" : "#128C7E",
                  transition: "all 0.3s ease"
                }}
              >
                Deployed ({projects.filter(p => p.deployed).length})
              </Button>
            </div>
          </div>

          <div className="d-none d-md-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h3 className="hhp fs-4 fw-bold me-4" style={{
                color: "antiquewhite",
                margin: 0
              }}>
                Projects
              </h3>
              
              <div className="d-flex gap-2">
                <Button
                  onClick={() => handleFilterChange('all')}
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  style={{
                    fontSize: "0.85rem",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "15px",
                    border: "1px solid #128C7E",
                    backgroundColor: filter === 'all' ? "#128C7E" : "transparent",
                    color: filter === 'all' ? "#fff" : "#128C7E",
                    transition: "all 0.3s ease"
                  }}
                >
                  All ({projects.length})
                </Button>
                <Button
                  onClick={() => handleFilterChange('deployed')}
                  className={`filter-btn ${filter === 'deployed' ? 'active' : ''}`}
                  style={{
                    fontSize: "0.85rem",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "15px",
                    border: "1px solid #128C7E",
                    backgroundColor: filter === 'deployed' ? "#128C7E" : "transparent",
                    color: filter === 'deployed' ? "#fff" : "#128C7E",
                    transition: "all 0.3s ease"
                  }}
                >
                  Deployed ({projects.filter(p => p.deployed).length})
                </Button>
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <span className="ms-3 me-3" style={{
                color: "antiquewhite",
                fontSize: "0.9rem",
                backgroundColor: "rgba(7, 94, 84, 0.3)",
                padding: "0.6rem 0.8rem",
                borderRadius: "20px",
                border: "1px solid #128C7E"
              }}>
                {activeIndex + 1}/{filteredProjects.length}
              </span>
              <Button
                variant="outline-secondary"
                onClick={() => handleNavigation('prev')}
                className="me-2"
                style={{
                  color: "#128C7E",
                  borderColor: "#128C7E",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0
                }}
              >
                <i className="bi bi-chevron-left" />
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => handleNavigation('next')}
                style={{
                  color: "#128C7E",
                  borderColor: "#128C7E",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0
                }}
              >
                <i className="bi bi-chevron-right" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ padding: "20px", backgroundColor: "#131a1b" }}>
        <Container>
          {filteredProjects.length > 0 ? (
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              interval={null}
              indicators={false}
              controls={false}
            >
              {filteredProjects.map((project, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    <Card className="bx" style={{
                      width: "100%",
                      maxWidth: "1000px",
                      backgroundColor: "#222",
                      color: "antiquewhite",
                      border: "0.4px solid #128c7e",
                      boxShadow: "0 3px 8px #128c7e"
                    }}>
                      <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                          <img
                            src={project.image}
                            className="img-fluid rounded"
                            alt={project.title}
                            style={{
                              maxHeight: "300px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <Card.Body className="h-100 fw-bold d-flex flex-column p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <div className="mon fs-6 text-center flex-grow-1" style={{
                                border: "1px solid #128C7E",
                                backgroundColor: "#075E54",
                                color: "antiquewhite",
                                padding: "0.3rem 0",
                                borderRadius: "3px"
                              }}>
                                {project.date}
                              </div>
                              {project.deployed && (
                                <span className="ms-2" style={{
                                  fontSize: "0.7rem",
                                  backgroundColor: "#128C7E",
                                  color: "white",
                                  padding: "0.2rem 0.5rem",
                                  borderRadius: "10px",
                                  fontWeight: "bold"
                                }}>
                                  LIVE
                                </span>
                              )}
                            </div>
                            <div className="sub-det text-center mb-3 p-2 rounded" style={{
                              backgroundColor: "#075E54",
                              borderRadius: "5px"
                            }}>
                              <Card.Title className="fs-6 fw-bold mb-2">{project.title}</Card.Title>
                              <Card.Subtitle className="fs-6 fw-light mb-3">{project.tech}</Card.Subtitle>
                            </div>
                            <Card.Text className="project-desc fs-6 fw-light" style={{
                              color: "antiquewhite",
                              flexGrow: 1
                            }}>
                              {project.description}
                            </Card.Text>
                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-auto">
                              {project.links.map((link, linkIndex) => (
                                <Button
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  className={`btns px-4 py-2 ${linkIndex === 0 ? "green-btn" : "transparent-btn"}`}
                                >
                                  {link.label}
                                </Button>
                              ))}
                            </div>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <div className="text-center" style={{ color: "antiquewhite", padding: "2rem" }}>
              No projects found for the selected filter.
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Projects;
