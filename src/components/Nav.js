const MENU = [
  {
    id: "home",
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
            <a href={`#${v.id}`}>{v.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
