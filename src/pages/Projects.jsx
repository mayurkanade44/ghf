import { useEffect } from "react";
import { services } from "../components/Utils";
import { Link } from "react-router-dom";

const Projects = ({ home }) => {
  let allServices;
  if (home) {
    allServices = services.slice(0, 3);
  } else {
    allServices = services;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="events">
      <div className="container">
        <div className="session-title row">
          <h2>Our Projects</h2>
          <p>
            We are a non-profital &amp; Charity raising money for child
            education
          </p>
        </div>
        <div className="event-ro row">
          {allServices.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.id}>
              <div className="event-box">
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <p className="raises">
                  <span>Raised : ₹{item.raised}</span> / ₹{item.total}
                </p>
                <p className="desic">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <Link
                  to={`/projects/${item.title}`}
                  className="btn btn-dark btn-sm me-2"
                >
                  Know More
                </Link>
                <button className="btn btn-success btn-sm">Donate Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
