import React from "react";
import { Link } from "react-router-dom";
import UserAuthenticationButton from "../UserAuthenticationButton/UserAuthenticationButton";

const NavigationBar = () => {
  return (
    <div className="navbar bg-white flex items-center">
      <div className="flex-none flex items-center">
        <div>
          <Link to={"/"}>
            <img
              src={require("../../assets/logo.jpg")}
              className="w-32 h-auto"
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <details className="dropdown">
            <summary className="m-1 btn rounded-full">Trang chủ</summary>
            <ul className="p-2 shadow-lg menu dropdown-content z-10 bg-white rounded-box w-52">
              <li className="hover:bg-gray-200 rounded-lg">
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className="hover:bg-gray-200 rounded-lg">
                <Link to={"/create"}>Tạo</Link>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1 form-control">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="input w-full rounded-full bg-gray-200"
          />
        </div>

        <UserAuthenticationButton />
      </div>
    </div>
  );
};

export default NavigationBar;
