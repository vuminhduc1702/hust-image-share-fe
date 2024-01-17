import React from "react";
import { useLocation } from "react-router-dom";

const PostPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex w-full px-3 pt-5 2xl:w-5/6 m-auto h-full">
      <div className="basis-1/2 flex items-center">
        <img
          src={state.post.postImageUrl}
          className="object-contain w-full rounded-xl"
        />
      </div>
      <div className="flex-1 pl-4">
        <h1 className="text-3xl font-bold mb-5">{state.post.postTitle}</h1>
        <h2 className="text-xl">{state.post.postDescription}</h2>
      </div>
    </div>
  );
};

export default PostPage;
