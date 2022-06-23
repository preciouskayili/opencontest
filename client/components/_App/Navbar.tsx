import React, { useEffect, useState } from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
  let navClass: string = "navbar container-fluid navbar-expand-lg sticky-top";

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    let abortController = new AbortController();

    document.addEventListener("scroll", () => {
      if (window !== undefined) {
        if (window.scrollY > 5) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    });

    return () => {
      abortController.abort();
    };
  });

  return (
    <>
      {/* Navbar */}
      <nav
        className={
          sticky
            ? `${navClass} navbar-dark navbar-darken nav-blur shadow-lg`
            : `${navClass} navbar-dark bg-transparent shadow-none`
        }
      >
        {/* Container wrapper */}
        <div className="container-fluid px-4">
          {/* Navbar brand */}
          <Link href="/">
            <a className="navbar-brand fw-bold mt-lg-0 me-auto">Open Contest</a>
          </Link>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mt-lg-0">
              {/* Avatar */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="badge badge-dark rounded-pill p-0"
                    style={{
                      height: "2rem",
                      backdropFilter: "blur(2rem)",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle h-100 img-responsive"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                    <span className="ps-1 p-2">Precious</span>
                  </div>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link href="/profile/1">
                      <a className="dropdown-item">My profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="dropdown-item">Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="dropdown-item">Logout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
