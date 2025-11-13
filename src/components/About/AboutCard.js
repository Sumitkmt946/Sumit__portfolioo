import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sumit Kumawat</span>{" "}
            from <span className="purple">Rajasthan, India</span>.
            <br />
            I’m currently a Computer Science Student and passionate{" "}
            <span className="purple">Software Developer</span>.
            <br />I am pursuing a Bachelor of Technology (B-Tech) in{" "}
            <span className="purple">Computer Science (E-Commerce)</span> from{" "}
            <span className="purple">VIT Bhopal University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving LeetCode Challenges 🧩
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Full Stack Applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Technologies 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sumit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
