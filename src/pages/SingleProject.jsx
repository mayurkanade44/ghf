import { Link, useParams } from "react-router-dom";
import { services } from "../components/Utils";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(services?.filter((item) => item.title === "EPCORN"));
  }, []);

  return (
    <section className="our-blog">
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
                  <div className="single-blog">
                    <figure>
                      <img src={item.image} alt={item.name} />
                    </figure>
                    <div className="blog-detail">
                      <h4 className="text-center">{item.name}</h4>
                      <p>{item.description.substring(0, 200)}...</p>
                      <div className="link">
                        <Link to={`/blog/${item.id}`}>Read More</Link>
                      </div>
                    </div>
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
