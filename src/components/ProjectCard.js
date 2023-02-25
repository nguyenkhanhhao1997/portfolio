import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>
            <a target="_blank" rel="noreferrer" href={url}>
              {title}
            </a>
          </h4>
          <span>{description}</span>
          <br />
          <span>{tech}</span>
        </div>
      </div>
    </Col>
  );
};
