import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../../Firebase/Firebase.init";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <nav className="h-16 md:bg-slate-500 bg-purple-600 md:bg-transparent z-50 flex md:flex-row relative justify-between items-center md:px-7">
      <div className="">
        <div className="font-bold text-3xl md:text-4xl text-white md:text-emerald-600 pl-3">
          <img
            className="h-[40px] w-[40px]"
            src="https://i.ibb.co/gZz3VwW/Helping-Hands.png"
            alt=""
          />
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="block absolute right-3 text-4xl top-4 md:hidden"
        >
          {!menuOpen ? (
            <HiMenuAlt1 className="text-white"></HiMenuAlt1>
          ) : (
            <HiX className="text-white"></HiX>
          )}
        </div>
      </div>

      <ul
        onClick={() => setMenuOpen(false)}
        className={`md:flex md:h-0 h-[91vh] bg-slate-500 absolute md:static top-16 md:top-auto p-7 md:px-0 md:bg-transparent duration-500  w-full md:w-auto items-center gap-8 text-xl font-normal   ${
          menuOpen ? "left-0 " : "left-[-100%]"
        }`}
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white md:text-emerald-600" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white md:text-emerald-600" : ""
            }
            to="/donation"
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white md:text-emerald-600" : ""
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white md:text-emerald-600" : ""
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink
                title={user?.displayName}
                className={({ isActive }) =>
                  isActive ? "text-white md:text-emerald-600" : ""
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => signOut(auth)} to="/login">
                Sin out
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white md:text-emerald-600" : ""
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white md:text-emerald-600" : ""
                }
                to="/login"
              >
                Log In
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
