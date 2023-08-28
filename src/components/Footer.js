import Logo from "../assets/Logo.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <Link to="/" class="footer-logo">
            <img class="logo" alt="Logo" src={Logo} />
          </Link>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="https://www.instagram.com">
                <img src={Instagram} class="social-icon" alt="logo-instagram" />
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://www.facebook.com">
                <img src={Facebook} class="social-icon" alt="logo-facebook" />
              </a>
            </li>
            <li>
              <a class="footer-link" href="https://www.twitter.com">
                <img src={Twitter} class="social-icon" alt="logo-twitter" />
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; 2027 by Little Lemon, Inc. All rights reserved.
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="footer-link" href="tel:000-000-0000">
                000-000-0000
              </a>
              <br />
              <a class="footer-link" href="mailto:hello@littlelemon.com">
                hello@littlelemon.com
              </a>
            </p>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <Link class="footer-link" to="/not-found">
                Create account
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                Sign in
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                iOS app
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                Android app
              </Link>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <Link class="footer-link" to="/not-found">
                About Little Lemon
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                For Business
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                Cooking partners
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <Link class="footer-link" to="/not-found">
                Recipe directory{" "}
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
                Help center
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/not-found">
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
