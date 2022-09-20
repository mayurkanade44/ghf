import { AboutUs, Blog, Contact, Home, Services, SingleBlog } from "./pages";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
