import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "W2 Solution",
      description: "Development",
      imgUrl: projImg1,
      tab: "sutrix",
    },
    {
      title: "Yu Cai Foundation",
      description: "Development",
      imgUrl: projImg2,
      tab: "sutrix",
    },
    {
      title: "Tecom",
      description: "Design & Development",
      imgUrl: projImg3,
      tab: "sutrix",
    },
    {
      title: "EMS",
      description: "Design & Development",
      imgUrl: projImg1,
      tab: "vacs",
    },
    {
      title: "FreeCAD",
      description: "Design & Development",
      imgUrl: projImg2,
      tab: "vacs",
    },
    {
      title: "OSM",
      description: "Design & Development",
      imgUrl: projImg3,
      tab: "vacs",
    },
    {
      title: "iBeBiz",
      description: "Design & Development",
      imgUrl: projImg1,
      tab: "ibebiz",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="sutrix">Sutrix Solutions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="vacs">VACS Technology</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ibebiz">Ibebiz</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="sutrix">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              project.tab === "sutrix" && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="vacs">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              project.tab === "vacs" && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="ibebiz">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              project.tab === "ibebiz" && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
