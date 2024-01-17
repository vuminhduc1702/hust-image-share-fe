import React, { useEffect, useState } from "react";
import AdminService from "../../services/adminService/AdminService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PostForAdmin from "../../components/PostForAdmin/PostForAdmin";

const AdminPage = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetch() {
      try {
        const response = await AdminService.getAllPosts();
        setPostList(response.data);
      } catch (err) {
        toast.error("Unauthorized");
        console.log(err.message);
        navigate("/");
      }
    }
    fetch();
  }, []);
  return (
    <div>
      {postList.length > 0 &&
        postList.map((post) => <PostForAdmin post={post} />)}
    </div>
  );
};

export default AdminPage;
