import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Content = () => {
  return (
    <main className="flex-grow p-8">
      <div className="container mx-auto text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
