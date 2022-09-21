import { AboutUs, Blog, Contact, Gallery, Home, Services, SingleBlog } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
