import a from "../images/slider/slider-1.jpeg";
import { homeImages } from "./Utils";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Carousel a={a} title="Khira Nagar" desc="testing" images={homeImages} />
      <h1 className="text-center">Giving Hope Foundation</h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima
        deserunt necessitatibus sint consectetur obcaecati magnam eos quam
        dolore ab tempore sit voluptate soluta incidunt nemo quibusdam, velit,
        asperiores maiores? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Officia aliquam expedita ad, delectus voluptas autem perferendis
        facilis alias odio cupiditate debitis sint quo accusamus voluptates
        dolorum minima cumque iusto itaque! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio quasi molestiae, hic, labore,
        cumque in est mollitia et eligendi nulla fugiat sint inventore delectus
        sit molestias ipsam assumenda blanditiis? Magni.
      </h1>
    </div>
  );
};
export default Home;
