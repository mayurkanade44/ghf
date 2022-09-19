import a from "../images/slider/slider-1.jpeg";
import { homeImages } from "../components/Utils";
import { Carousel, About } from "../components";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Carousel a={a} title="Khira Nagar" desc="testing" images={homeImages} />
      <About />
      <Services home="true" />
      <div class="doctor-message">
        <div class="inner-lay">
          <div class="container">
            <div class="row session-title">
              <h2>Our Achievemtns in Numbers</h2>
              <p>
                We can talk for a long time about advantages of our Dental
                clinic before other medical treatment facilities. But you can
                read the following facts in order to make sure of all pluses of
                our clinic:
              </p>
            </div>
            <div class="row">
              <div class="col-sm-3 numb">
                <h3>12+</h3>
                <span>YEARS OF EXPEREANCE</span>
              </div>
              <div class="col-sm-3 numb">
                <h3>1812+</h3>
                <span>HAPPY CHILDRENS</span>
              </div>
              <div class="col-sm-3 numb">
                <h3>52+</h3>
                <span>EVENTS</span>
              </div>
              <div class="col-sm-3 numb">
                <h3>48+</h3>
                <span>FUNT RAISED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
