import './Toolbar.css';
import { Link } from 'react-router-dom';
const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample"
          aria-controls="navbarExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/projects/action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/projects/another">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/projects/something-else">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center flex-column flex-lg-row">
            <form className="me-2 mb-2 mb-lg-0">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search"
              />
            </form>
            <Link className="btn btn-primary" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Toolbar;
