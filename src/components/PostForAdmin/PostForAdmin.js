import React, { useEffect, useState } from "react";
import AdminService from "../../services/adminService/AdminService";
import toast from "react-hot-toast";

const PostForAdmin = ({ post }) => {
  const [isPublished, setIsPublished] = useState(post.isPublished);

  const handlePublishPost = async (e, postId) => {
    e.preventDefault();
    try {
      const response = await AdminService.publishPost(postId);
      toast.success("Success");
      setIsPublished(true);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const handleDeletePost = async (e, postId) => {
    e.preventDefault();
    try {
      const response = await AdminService.unpublishPost(postId);
      toast.success("Success");
      setIsPublished(false);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex gap-10 border border-gray-200 my-3 m-auto max-w-4xl rounded-xl p-3">
      <div className="basis-1/3">
        <img src={post.postImageUrl} className="rounded-xl w-full h-auto" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Title: {post.postTitle}</h1>
          <h2 className="text-lg font-semibold">
            Description: {post.postDescription}
          </h2>
        </div>
        <div className="flex justify-start gap-3 h-fit">
          {!isPublished ? (
            <button
              onClick={(e) => handlePublishPost(e, post.postId)}
              className="bg-green-400 hover:bg-green-500 text-white px-2 py-1 rounded-lg"
            >
              Publish
            </button>
          ) : (
            <button
              onClick={(e) => handleDeletePost(e, post.postId)}
              className="bg-red-400 hover:bg-red-500 text-white font-semibold px-3 py-1 rounded-lg"
            >
              Unpublish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostForAdmin;
