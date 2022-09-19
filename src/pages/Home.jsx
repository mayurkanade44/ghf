import a from "../images/slider/slider-1.jpeg";
import { homeImages } from "../components/Utils";
import { Carousel, About } from "../components";

const Home = () => {
  return (
    <div>
      <Carousel a={a} title="Khira Nagar" desc="testing" images={homeImages} />
      <About />
    </div>
  );
};
export default Home;
