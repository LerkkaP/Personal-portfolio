import Contact from "../pages/Contact";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Content = () => {
  return (
    <main className="flex-grow p-8">
      <div className="container mx-auto text-center">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Content;
