import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import frmx from "../../Assets/Screenshot 2023-06-01 223642.jpg";
import iris from "../../Assets/51518iris img1.png";
import rawg from "../../Assets/WlsWAqEbIshvbP1o9rG93wYZO_FrgLrV76WM_BINEjk.webp";
function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card">
              <ProjectCard
                imgPath={frmx}
                isBlog={false}
                title="FarmX"
                description=""
                ghLink="https://github.com/shubhamchaudhary1/FarmX"
              />
            </Col>

            <Col md={12} className="project-card">
              <ProjectCard
                imgPath={iris}
                isBlog={false}
                title="IRIS Flowers Classification Using Machine Learning"
                description=""
                ghLink="https://github.com/shubhamchaudhary1/Iris-Flower-Classification-Using-Machine-Learning"
              />
            </Col>

            <Col md={12} className="project-card">
              <ProjectCard
                imgPath={rawg}
                isBlog={false}
                title="Game-Hub"
                description=""
                ghLink="https://github.com/shubhamchaudhary1/game-hub"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
