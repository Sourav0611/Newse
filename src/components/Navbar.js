import React from 'react';

export default function Navbar() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <h2>Newse</h2>
          {/* Ensure the SVG sprite with id #bootstrap exists */}
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use href="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item"><a href="/about" className="nav-link px-2 link-secondary">About</a></li>
          <li className="nav-item"><a href="/business" className="nav-link px-2 link-body-emphasis">Business</a></li>
          <li className="nav-item"><a href="/entertainment" className="nav-link px-2 link-body-emphasis">Entertainment</a></li>
          <li className="nav-item"><a href="/general" className="nav-link px-2 link-body-emphasis">General</a></li>
          <li className="nav-item"><a href="/health" className="nav-link px-2 link-body-emphasis">Health</a></li>
          <li className="nav-item"><a href="/science" className="nav-link px-2 link-body-emphasis">Science</a></li>
          <li className="nav-item"><a href="/technology" className="nav-link px-2 link-body-emphasis">Technology</a></li>
        </ul>


        <div className="dropdown text-end">
          <a href="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>N</strong>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="/">New project...</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
