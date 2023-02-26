import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import w2solution from "../assets/img/w2-solution.png";
import ycf from "../assets/img/yucai-foundation.png";
import tecom from "../assets/img/tecom.png";
import freecad from "../assets/img/freecad.png";
import revit from "../assets/img/revit.png";
import vacs from "../assets/img/vacs.png";
import ibebiz from "../assets/img/ibebiz.png";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "W2 Solution",
      description: "Ecommerce website",
      tech: ".NET, Javascript",
      imgUrl: w2solution,
      url: "https://www.w2solution.com/",
      tab: "sutrix",
    },
    {
      title: "Yu Cai Foundation",
      description: "Collect information",
      tech: ".NET, Kentico, Javascript",
      imgUrl: ycf,
      url: "https://www.ycf.org.my/",
      tab: "sutrix",
    },
    {
      title: "Tecom",
      description: "Business",
      tech: ".NET, Kentico, Javascript",
      imgUrl: tecom,
      url: "https://tecomgroup.ae/",
      tab: "sutrix",
    },
    {
      title: "ERP",
      description: "Internal ERP system",
      tech: ".NET, Kentico, Javascript",
      imgUrl: vacs,
      url: "#",
      tab: "vacs",
    },
    {
      title: "Revit Addon",
      description: "Import CAD file, create template & models",
      tech: "C#, Revit API, Winform",
      imgUrl: revit,
      url: "#",
      tab: "vacs",
    },
    {
      title: "FreeCAD",
      description: "3D parametric modeler",
      tech: "Python, Qt5",
      imgUrl: freecad,
      url: "https://www.freecad.org/",
      tab: "vacs",
    },
    {
      title: "iBeBiz",
      description: "Ecommerce website",
      tech: ".NET, Angularjs, Unit test",
      imgUrl: ibebiz,
      url: "#",
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
                  <Tab.Container id="projects-tabs" defaultActiveKey="sutrix">
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
