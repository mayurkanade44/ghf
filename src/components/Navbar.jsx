import email from "../images/social/email.png";
import phone from "../images/social/phoneNav.png";
import insta from "../images/social/instagram.png";
import fb from "../images/social/facebook.png";
import ln from "../images/social/linkedin.png";
import logo from "../images/2.png";
import menu from "../images/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <header className="container-fluid sticky-top">
      <div className="header-top">
        <div className="container">
          <div className="row col-det">
            <div className="col-lg-5 col-md-7 cont">
              <ul className="ulleft">
                <li>
                  <img src={email} className="pb-1 mx-1" alt="email" />
                  <small>ghf.org.in@gmail.com</small>
                </li>
                <li>
                  <img src={phone} className="pb-1" alt="phone" />
                  <small> +7400 453 069</small>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 follows d-flex justify-content-lg-start">
              <ul className="ulright">
                <li className="follow-li">
                  <small>Follow Us :</small>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Giving-Hope-Foundation-100304929513483/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fb} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/giving-hope-foundation-india/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ln} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/givinghope.foundation/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={insta} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block col-md-5 d-flex justify-content-center btn-bhed">
              <a href="contact_us.html">
                <button className="btn btn-sm btn-success">Join Us</button>
              </a>
              <button className="btn btn-sm btn-default">Donate</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="mobile-nav">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="logo" alt="Mayur" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              aria-controls="navbarNav"
              aria-label="toggle navigation"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <img src={menu} alt="menu" style={{ width: 35 }} />
            </button>
          </div>
          <div
            className={`navbar-collapse ${!expand ? "collapse" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-center"
                  aria-current="page"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AboutUs"
                  className="nav-link text-center"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Services"
                  className="nav-link text-center"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  className="nav-link text-center"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Gallary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Blogs"
                  className="nav-link text-center"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link text-center"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
