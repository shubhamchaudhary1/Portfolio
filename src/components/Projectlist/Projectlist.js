import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                //     imgPath={}
                isBlog={false}
                title=""
                description=""
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //  imgPath={}
                isBlog={false}
                title=""
                description=""
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //      imgPath={}
                isBlog={false}
                title=""
                description=""
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //        imgPath={}
                isBlog={false}
                title=""
                description=""
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //     imgPath={}
                isBlog={false}
                title=""
                description=""
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //       imgPath={}
                isBlog={false}
                title=""
                description=" "
                ghLink=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
