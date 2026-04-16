import { NavLink } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { HiLocationMarker } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
            <div className="footer-contact" >
              <div className="icon"><HiLocationMarker/></div>
              <div className="footer-contact-text">
                <p>Find Me</p>
                <p>Bangalore, Karnataka</p>
              </div>
            </div>
            <div className="footer-contact" >
              <div className="icon"><TfiEmail></TfiEmail></div>
              <div className="footer-contact-text">
                <p>Email </p>
                <p>syedsiddiq104@gmail.com</p>
              </div>
            </div>
            <div className="footer-contact" >
              <div className="icon"><LuPhoneCall /></div>
              <div className="footer-contact-text">
                <p>Call Me</p>
                <p>+91-9******605</p>
              </div>
            </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://syedsiddiq104.github.io/PORTFOLIO_V3/" target="_blank">
                  Syed Siddiq ❤️
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/syedsiddiq104?igsh=OWRrZTF2ZXRjMjhp"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/syedsiddiq104/WORLD-ATLAS.git"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer