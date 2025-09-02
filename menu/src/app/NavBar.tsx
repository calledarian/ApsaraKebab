"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="container">
        {/* Logo and Brand Name */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/apsara.jpg"
            alt="Apsara Fusion"
            className="me-2 img-fluid"
            style={{ maxWidth: "80px", height: "auto" }}
          />
          <span
            className="fw-bold d-inline-block"
            style={{
              fontSize: "clamp(24px, 5vw, 50px)",
              lineHeight: "1.2",
              color: "var(--highlight)"
            }}
          >
            Apsara Fusion
          </span>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ borderColor: "var(--highlight)" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
              { href: "/menu", label: "Menu" },
            ].map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                  style={{
                    fontSize: "30px",
                    lineHeight: "30px",
                    color: pathname === item.href ? "var(--secondary)" : "var(--highlight)",
                    fontWeight: "600",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
