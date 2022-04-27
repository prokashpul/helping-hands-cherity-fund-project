import React from "react";
import { HiOutlineUserGroup, HiPlus } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="md:grid grid-cols-5 min-h-[90vh]">
      <aside className="col-span-1 md:bg-white bg-gray-400">
        <nav className="md:m-5 sticky top-0 p-2 md:p-0 ">
          <ul className="flex justify-start md:flex-col flex-wrap  gap-5">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white md:text-emerald-600" : ""
                }
                to="/admin/registerList"
              >
                <div className="flex items-center gap-2 text-xl ">
                  <HiOutlineUserGroup /> <span>Volunteer register list</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white md:text-emerald-600" : ""
                }
                to="/admin/add-event"
              >
                <div className="flex items-center gap-2 text-xl ">
                  <HiPlus /> <span>Add event</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="admin col-span-4 p-10 bg-slate-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
