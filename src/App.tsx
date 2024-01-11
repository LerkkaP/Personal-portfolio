import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";


const App = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
