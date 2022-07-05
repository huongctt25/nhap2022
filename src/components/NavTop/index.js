import { Link, NavLink } from "react-router-dom";

const NavTop = () => {
  console.log("nav");
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#7D9BF6" }}
    >
      <NavLink to="/" className="site-title text-light">
        Home
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/listings" className="nav-link ">
              Listings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/peoples" className="nav-link ">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chats" className="nav-link ">
              Chat
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
