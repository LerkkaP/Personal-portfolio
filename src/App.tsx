import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";


const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Hero />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
=======
      <div className="flex flex-col h-screen">
        <Header />
        <Content />
        <Footer />
      </div>
>>>>>>> 8a841413ffe95caf7914fd793975c57657f10453
    </div>
  );
};

export default App;
