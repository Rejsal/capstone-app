import Logo from "../assets/Logo.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="/" className="footer-logo">
            <img className="logo" alt="Logo" src={Logo} />
          </Link>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="https://www.instagram.com">
                <img
                  src={Instagram}
                  className="social-icon"
                  alt="logo-instagram"
                />
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://www.facebook.com">
                <img
                  src={Facebook}
                  className="social-icon"
                  alt="logo-facebook"
                />
              </a>
            </li>
            <li>
              <a className="footer-link" href="https://www.twitter.com">
                <img src={Twitter} className="social-icon" alt="logo-twitter" />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2027 by Little Lemon, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:000-000-0000">
                000-000-0000
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@littlelemon.com">
                hello@littlelemon.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/not-found">
                Create account
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                iOS app
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Android app
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/not-found">
                About Little Lemon
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                For Business
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Cooking partners
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/not-found">
                Recipe directory{" "}
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Help center
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/not-found">
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
