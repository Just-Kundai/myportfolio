import React from 'react';
import { Link } from 'react-router-dom';
import '../navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/projects" className="navigation__link">Projects</Link>
        </li>
        <li className="navigation__item">
          <Link to="/resume" className="navigation__link">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
