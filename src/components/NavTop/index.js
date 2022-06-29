import { Link, NavLink } from "react-router-dom";

const NavTop = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "rgb(213, 201, 251)" }}
    >
      <Link to="/" className="site-title">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/listings" className="nav-link ">
              Listings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cases" className="nav-link ">
              Cases
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/login" className="nav-link light">
              Login
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            {/* <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a> */}
            {/* <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">
                Action
              </Link>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </div> */}
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavTop;
