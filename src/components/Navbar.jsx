import { Link, NavLink } from "react-router";

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500" : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500" : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <header className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <h2 className="cursor-pointer text-xl">Book Vibe</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-2">
            <Link to="/sign-in" className="btn bg-[#23BE0A] text-white">
              Sign In
            </Link>
            <Link to="/sign-up" className="btn bg-[#59C6D2] text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
