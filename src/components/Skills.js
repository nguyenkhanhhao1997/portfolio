import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import star from "../assets/img/star.png";
import menu from "../assets/img/menu.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical skills</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={star} alt="Image" />
                  <h6>3 Year</h6>
                  <h5>.NET Framework</h5>
                </div>
                <div className="item">
                  <img src={star} alt="Image" />
                  <h6>1 Year</h6>
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={star} alt="Image" />
                  <h6>1 Year</h6>
                  <h5>SQL Server</h5>
                </div>
                <div className="item">
                  <img src={star} alt="Image" />
                  <h6>1 Year</h6>
                  <h5>AngularJs</h5>
                </div>
                <div className="item">
                  <img src={star} alt="Image" />
                  <h6>1 Year</h6>
                  <h5>Python</h5>
                </div>
              </Carousel>
              <h2>Other Skills</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>.NET</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SQL Server</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Unit Test</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Unit Test</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
