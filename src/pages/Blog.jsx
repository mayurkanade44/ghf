import { Link } from "react-router-dom";
import { blogs } from "../components/Utils";
import { useEffect } from "react";

const Blog = ({ home }) => {
  let allBlogs;
  if (home) {
    allBlogs = blogs.slice(0, 3);
  } else {
    allBlogs = blogs;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="our-blog">
      <div className="container">
        <div className="row session-title">
          <h2>Our Blog</h2>
          <p>Take a look at what people say about US</p>
        </div>
        <div className="blog-row row">
          {allBlogs.map((blog) => (
            <div className="col-md-4 col-sm-6" key={blog.id}>
              <div className="single-blog">
                <figure>
                  <img src={blog.image} alt={blog.title} />
                </figure>
                <div className="blog-detail">
                  <h4 className="text-center">{blog.title}</h4>
                  <p>{blog.description.substring(0, 200)}...</p>
                  <div className="link">
                    <Link to={`/blog/${blog.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
