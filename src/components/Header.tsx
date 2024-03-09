import NavBar from "./Navbar";

const Header = () => {
  return (
    <header >
      <section className="h-screen">
        <NavBar />
        <img className="blur-sm object-cover h-full" src="src/assets/portfolio_banner.png" alt="Header image" />
      </section>
    </header>
  );
};

export default Header;
