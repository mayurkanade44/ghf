import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs, homeImages } from "../components/Utils";

const SingleBlog = () => {
  const { id } = useParams();
  const [main, setMain] = useState({});
  const [changeb, setChangeb] = useState(false);
  const blog = blogs.filter((blog) => blog.id === Number(id));
  useEffect(() => {
    changeImage();
  }, [changeb]);

  const changeImage = (id) => {
    if (id) {
      setMain(
        blog.map((blog) => blog.images.filter((image) => image.id === id))[0][0]
      );
    } else {
      setMain(
        blog.map((blog) => blog.images.filter((image) => image.id === 1))[0][0]
      );
      setChangeb(true);
    }
  };

  return (
    <div className="container">
      {blog.map((blog) => (
        <div key={blog.id}>
          <h1 className="text-center py-3">{blog.title}</h1>
          <img src={blog.bannerImg} alt="" />
          <div className="row mission p-4 flex-column-reverse flex-md-row">
            <div className="col-md-6 mv-img">
              <div className="row mb-3">
                <div className="col-3">
                  <div className="row gy-1">
                    {blog.images.map((image, index) => {
                      return (
                        <img
                          key={index}
                          className="border border-dark border-1"
                          style={{ height: 132 }}
                          src={image.img}
                          alt="name"
                          onClick={() => changeImage(image.id)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="col-9">
                  <img
                    src={main.img}
                    alt="main"
                    style={{ height: 540 }}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mv-det">
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SingleBlog;
