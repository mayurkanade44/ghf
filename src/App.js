import {
  AboutUs,
  Blog,
  Contact,
  Gallery,
  Home,
  Projects,
  SingleBlog,
  SingleProject,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:name" element={<SingleProject />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Project/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
