import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wanderlustfinal from "../../Assets/Projects/wanderlustfinal.png";
import Spotify from "../../Assets/Projects/Spotify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlustfinal}
              isBlog={false}
              title="Wanderlust"
              description="A travel accommodation web application that allows users to explore and list unique stays across destinations. Built with a modern full-stack architecture, it includes property listings, search functionality, pricing per night, and a responsive, user-friendly interfacex."
              ghLink="https://github.com/Yashh0222/wanderlust-project"
              demoLink="https://wanderlust-project-18.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify (Clone)"
              description="A frontend-only implementation of a Spotify-inspired music streaming interface, featuring playlist views, navigation panels, and a responsive layout built with modern frontend technologies."
              ghLink="https://github.com/Yashh0222/Spotify-Clone-"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
