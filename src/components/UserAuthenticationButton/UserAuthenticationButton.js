import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import LogoutModal from "../LogoutModal/LogoutModal";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const UserAuthenticationButton = () => {
  const { isAuthed, setIsAuthed, role, email } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuthed(false);
    localStorage.removeItem("accessToken");
    navigate("/");
    toast.success("Logged out");
  };

  return (
    <div>
      {isAuthed && (
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full text-lg  bg-pink-400 text-white hover:bg-pink-500 uppercase">
                <div className="w-full h-full flex items-center justify-center">
                  {email[0] + email[1]}
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li className="hover:bg-gray-200 rounded-lg">
                <Link to={"/profile"}>Trang cá nhân</Link>
              </li>
              <li className="hover:bg-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    document.getElementById("logout_modal").showModal()
                  }
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
          <LogoutModal handleLogout={handleLogout} />
        </div>
      )}

      {!isAuthed && (
        <div className="flex gap-2">
          <Link className="btn" to={"/login"}>
            Log in
          </Link>
          <Link className="btn" to={"/signup"}>
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAuthenticationButton;
