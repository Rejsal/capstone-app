import { Link } from "react-router-dom";

const MENU = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "reservations",
    title: "Reservations",
  },
  {
    id: "order_online",
    title: "Order Online",
  },
  {
    id: "login",
    title: "Login",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {MENU.map((v) => (
          <li key={v.id} className="nav-menu">
            <Link to={`/${v.id}`}>{v.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
