import { useParams } from "react-router-dom";
import { services } from "../components/Utils";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(services?.filter((item) => item.title === "EPCORN"));
  }, []);

  return (
    <section className="events">
      <div className="container">
        {project?.map((item) => (
          <div key={item.id}>
            <div className="session-title row">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="event-ro row">
              {item.projects?.map((item) => (
                <div className="col-md-4 col-sm-6" key={item.id}>
                  <div className="event-box">
                    <img src={item.image} alt="" />
                    <h4>{item.name}</h4>
                    <p className="raises">
                      <span>Raised : ₹{item.raised}</span> / ₹{item.total}
                    </p>
                    <p className="desic">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <button className="btn btn-dark btn-sm me-2">
                      Know More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SingleProject;
