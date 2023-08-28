import Nav from "./Nav";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  );
};
export default Header;
