import NavBar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full">
      <NavBar />

      <img src="src/assets/portfolio_banner.png" alt="Header image" />
    </header>
  );
};

export default Header;
