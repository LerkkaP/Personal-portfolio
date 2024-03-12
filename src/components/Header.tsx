import NavBar from "./Navbar";

const Header = () => {
  return (
    <header>
      <section className="h-screen">
        <NavBar />
        <img className="blur-sm object-cover h-full" src="src/assets/portfolio_banner.png" alt="Header image" />
      </section>
      <div>
        <div className="absolute top-1/3 left-32 text-white">
          <h1 className="text-9xl font-bold">Erik</h1>
          <h1 className="text-9xl font-bold">Peteri</h1>
          <p className="text-2xl">Computer science student at University of Helsinki.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

