import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)", // Gradient background
        padding: "10px 20px",
      }}
    >
      <div className="container-fluid">
        <a
          href="/"
          className="navbar-brand text-white"
          style={{ fontSize: "1.8rem", fontWeight: "bold", letterSpacing: "2px" }}
        >
          Newse
        </a>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="/business"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/entertainment"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/general"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/health"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/science"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/technology"
                className="nav-link text-white"
                style={{ marginRight: "15px" }}
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
