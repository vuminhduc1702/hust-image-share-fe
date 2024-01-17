import React, { useState } from "react";
import PostModal from "../PostModal/PostModal";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <div className="columns-3 lg:columns-4 2xl:columns-5">
      {posts?.length > 0 &&
        posts?.map((post) => (
          <Link
            key={post.postId}
            to={`/post/${post.postId}`}
            state={{ post: post }}
            className="w-full py-2 flex flex-col cursor-pointer hover:brightness-50"
          >
            <img
              className="w-full rounded-xl border border-gray-200"
              src={post?.postImageUrl}
            />
          </Link>
        ))}
    </div>
  );
};

export default PostList;
