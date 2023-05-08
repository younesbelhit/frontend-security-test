import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
    >
      <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted L-Affiliate-Tagged">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/faq"
            className="nav-link px-2 text-muted L-Affiliate-Tagged"
          >
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className="nav-link px-2 text-muted L-Affiliate-Tagged"
          >
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
