import { Link } from "react-router-dom";
import profile, { navLinks, footerTagline } from "../config/profile.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <p className="footer-name">{profile.name}</p>
            <p className="footer-text">{footerTagline}</p>
            <SocialLinks />
          </div>
          <div className="col-6 col-lg-3 offset-lg-1">
            <h2 className="footer-heading">Pages</h2>
            <ul className="footer-links">
              {navLinks.map(({ to, label }) => <li key={to}><Link to={to}>{label}</Link></li>)}
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="footer-heading">Contact</h2>
            <a className="footer-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
