import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg shadow-none sticky-top navbar-dark container-fluid"
        style={{ backgroundColor: "#000" }}
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Navbar brand */}
          <Link href="/">
            <a className="navbar-brand me-auto fw-bold mt-lg-0">Open Contest</a>
          </Link>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <div className="input-group w-100">
                  <input
                    type="text"
                    id="form1"
                    placeholder="Search"
                    className="form-control border-0"
                    style={{
                      width: "20rem",
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      color: "#fff",
                    }}
                  />
                  <button
                    className="btn btn-sm shadow-none border-0"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      marginLeft: "0.001px",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </li>
            </ul>
            {/* Right elements */}
            <div className="d-flex mt-2 align-items-center"></div>
            {/* Right elements */}
            <ul className="navbar-nav">
              <li className="nav-item mt-lg-0">
                <Link href="/explore">
                  <a className="nav-link fw-bold">
                    <BsFillGridFill
                      className="me-1 fs-5"
                      style={{ marginTop: "-0.2rem" }}
                    />
                    Explore
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mt-lg-0 ms-auto">
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
                    <Link href="/">
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
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
