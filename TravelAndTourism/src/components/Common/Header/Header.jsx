import React, { useEffect, useState } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "../Header/header.css";
import logo from "../../../assets/images/logo/logo.jpg"; // Adjust this path if needed

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Close menu on navigation
  const closeMenu = () => {
    setOpen(false);
  };

  // Sticky header listener
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-section");
      if (!header) return; // ✅ Prevents null error

      const scrollTop = window.scrollY;
      if (scrollTop >= 120) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if on homepage
  const isHome = location.pathname === "/";

  // Menu links array
  const menuLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/tour-listings", label: "TOURS" },
    { path: "/activities", label: "ACTIVITIES" },
    { path: "/destination", label: "DESTINATION" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT" },
    // Link to public view of Travel Diary app
    { label: "TRAVEL DIARY", external: true, href: "http://localhost:5174/public" },
    // Link to main Travel And Tourism site
    { label: "MAIN SITE", external: false, path: "/" },
  ];

  return (
    <header className={`header-section${!isHome ? " header-black" : ""}`}>
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/" className="d-flex align-items-center">
              <img src={logo} alt="Northern Indian Trip Logo" className="logo-img me-2" />
              NorthernIndianTrip
            </NavLink>
          </Navbar.Brand>

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/* Mobile Logo */}
            <Offcanvas.Header>
              <NavLink
                to="/"
                className="d-flex align-items-center logo-mobile"
                onClick={closeMenu}
              >
                <img src={logo} alt="Northern Indian Trip Logo" className="logo-img me-2" />
                <h1 className="m-0">Northern Indian Trip</h1>
              </NavLink>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            {/* Menu Items */}
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menuLinks.map((link, index) => (
                  link.external ? (
                    <a
                      key={index}
                      className="nav-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      key={index}
                      className="nav-link"
                      to={link.path}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  )
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Book Now & Mobile Toggle */}
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block" to="/book-now">
              Book Now
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
