import a from "../images/slider/slider-1.jpeg";
import { homeImages } from "../components/Utils";
import { Carousel, About } from "../components";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Carousel a={a} title="Khira Nagar" desc="testing" images={homeImages} />
      <About />
      <Services home='true' />
    </div>
  );
};
export default Home;
