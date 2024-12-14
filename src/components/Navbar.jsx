import { useContext } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allEquipment">ALL Equipment</NavLink>
      </li>
    </>
  );
  const privateLink = (
    <>
      <li>
        <NavLink to="/addEquipment">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/myEquipment">My Equipment</NavLink>
      </li>
    </>
  );
  const authLink = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
            {privateLink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Sports Sphere</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
          {privateLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user && user?.email ? (
            <>
              <div className="flex gap-3 justify-center ">
                <div className="group relative">
                  {/* Image profile pic */}
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={user?.photoURL}
                    alt="user profile pic"
                  />

                  <p className="absolute -bottom-8 left-0 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {user?.displayName}
                  </p>
                </div>
                <button
                  onClick={logOut}
                  className="btn bg-[#fc601d] rounded-none text-white"
                >
                  {" "}
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#58B97F] rounded-none text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
