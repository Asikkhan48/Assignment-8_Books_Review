import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* Navbar */}

      <div className="navbar bg-base-100 shadow-lg fixed z-10">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            Book Vibe
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/read"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmark"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Bookmark
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn btn-primary mr-4">Sign In</a>
          <a className="btn btn-secondary">Sign Up</a>
        </div>
      </div>
      
    </>
  );
};

export default Nav;
