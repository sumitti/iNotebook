import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import '../App.css';

export default function NavBar() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/terms', label: 'Terms' },
    { to: '/login', label: 'SignIn' },
    { to: '/register'},
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom">
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand fw-bold text-warning d-flex align-items-center" to="/">
            <BookOpen size={24} className="me-2" />
            iNOTEBOOK
          </NavLink>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item mx-3" key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? 'nav-link text-warning fw-semibold' : 'nav-link text-secondary'
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Call-to-action button */}
            <NavLink className="btn btn-warning px-4 py-2 fw-semibold" to="/register">
              Get started
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
