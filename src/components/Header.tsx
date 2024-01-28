import NavBar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute top-0 w-full">
      <NavBar />
      <div>
        <img src="src/assets/portfolio_banner.png" alt="Header image" />
      </div>
    </header>
  );
};

export default Header;
