import React from "react";
import CloseIcon from "../../assets/icons/CloseIcon";

const PostModal = ({ post }) => {
  return (
    <>
      <dialog id={`post_modal_${post.postId}`} className="modal relative">
        <div className="modal-box h-full max-w-full bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost border-none outline-none hover:bg-gray-200 absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex h-full">
            <div className="basis-2/3 flex items-start">
              <img
                src={post.postImageUrl}
                className="object-contain w-full rounded-xl"
              />
            </div>
            <div className="flex-1 pl-4">
              <h1 className="text-3xl font-bold mb-5">{post.postTitle}</h1>
              <h2 className="text-xl">{post.postDescription}</h2>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PostModal;
