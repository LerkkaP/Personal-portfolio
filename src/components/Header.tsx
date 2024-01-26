import NavBar from "./Navbar";

const Header = () => {
  return (
    <header className="relative bg-red-200">
      <NavBar />
      <div>
        <img src="src/assets/portfolio_banner.png" alt="Header image" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">Hello</p>
      </div>
  </header>
  )
}

export default Header;

