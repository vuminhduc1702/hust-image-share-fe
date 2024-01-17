import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

const NavigationBarDropDown = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { role } = useContext(AuthContext);
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn rounded-full">
          {pathname === "/create"
            ? "Tạo"
            : pathname === "/admin"
            ? "Admin"
            : "Trang chủ"}
        </summary>
        <ul className="p-2 shadow-lg menu dropdown-content z-10 bg-white rounded-box w-52">
          <li className="hover:bg-gray-200 rounded-lg">
            <Link to={"/"}>Trang chủ</Link>
          </li>
          {role === 2 && (
            <li className="hover:bg-gray-200 rounded-lg">
              <Link to={"/create"}>Tạo</Link>
            </li>
          )}
          {role === 1 && (
            <li className="hover:bg-gray-200 rounded-lg">
              <Link to={"/admin"}>Admin</Link>
            </li>
          )}
        </ul>
      </details>
    </div>
  );
};

export default NavigationBarDropDown;
