import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Task Management App"
              description="A full-stack Task Management tool built with the MERN stack. It features secure JWT authentication to ensure 100% privacy for user data and APIs. The responsive React.js frontend is optimized for productivity, reducing task completion time by 15% for users."
              ghLink="https://github.com/Sumitkmt946/Task_Managment_web_Application"
              demoLink="https://private-user-images.githubusercontent.com/147964251/455203705-3cb0378d-f3c7-4ab7-b9d4-9f0a1c41c348.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI5NTY5NjgsIm5iZiI6MTc2Mjk1NjY2OCwicGF0aCI6Ii8xNDc5NjQyNTEvNDU1MjAzNzA1LTNjYjAzNzhkLWYzYzctNGFiNy1iOWQ0LTlmMGExYzQxYzM0OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMlQxNDExMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzI1ZGU4NjI2YTA3MmE1MDQxMjZjNmFiMzliM2FmZTA0ZjQwZjljYzE2ZjY0NzIwNWI5NmM0MWFhZDMyOTU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.a-9gL9UPdOLj-ssoBQyjgBzr99aMlGcwjCD9Puc2GuU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React Gaming App"
              description="An interactive game application optimized for high performance using React.js. Implemented Redux for state management, which reduced component re-renders by 30%, ensuring a smooth, lag-free user experience during gameplay."
              ghLink="https://github.com/Sumitkmt946/Free-Game-App"
              demoLink="https://private-user-images.githubusercontent.com/147964251/420458086-ac4a820a-1161-4db8-b89a-93ad718e9827.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI5NTcxNTgsIm5iZiI6MTc2Mjk1Njg1OCwicGF0aCI6Ii8xNDc5NjQyNTEvNDIwNDU4MDg2LWFjNGE4MjBhLTExNjEtNGRiOC1iODlhLTkzYWQ3MThlOTgyNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMlQxNDE0MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNmJiMWFiYWJhYmI0Mzg3YjkzYTZhMzkyNTI5NzJiNTliZGZjYjdiMzFkMTRjMjY1NWFiMzlhNWIxZDRiMjQ1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ECL9gMIzzcufCh5AvKADo223kRPGvRHbAla5xmxaN7E"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI E-Commerce Platform"
              description="A dynamic E-Commerce platform built with RESTful APIs and secure payment integration. Features a custom AI recommendation system (collaborative filtering) that achieved 90% accuracy in product suggestions. Designed for high engagement and seamless transaction processing."
              ghLink="https://github.com/"
                          
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title ="Face Recognition Attendance System" 
              description="An automated attendance solution built with Python and OpenCV. Utilizes advanced Machine Learning libraries to identify individuals in real-time with high accuracy. The system automatically logs entry times into a CSV/Excel database, eliminating manual errors and preventing proxy attendance."
              ghLink="https://github.com/Sumitkmt946/Face_recognition_attendance_system"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
