import Nav from "./Nav";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <a href="#/">
        <img src={Logo} alt="Logo" />
      </a>
      <Nav />
    </header>
  );
};
export default Header;
