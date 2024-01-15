import { categoryList } from "../../assets/category";
import UploadFileIcon from "../../assets/icons/UploadFile";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PostService from "../../services/postService/PostService";
import toast from "react-hot-toast";

const CreateNewPostPage = () => {
  const [file, setFile] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("postTitle", data.postTitle);
    formData.append("categoryId", data.categoryId);
    formData.append("postDescription", data.postDescription);
    formData.append("multipartFile", data.image[0]);
    console.log(formData);

    try {
      const response = await PostService.createNewPost(formData);
      toast.success("Saved");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file === undefined) return;
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col items-center gap-12 w-5/6 h-full m-auto 2xl:flex-row 2xl:w-3/4 2xl:items-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full pb-5 2xl:basis-3/5"
      >
        <div className="sticky top-0 z-40 flex justify-end pb-3 mb-3 h-16 border-b border-gray-200">
          <button className="btn bg-red-500 text-white font-semibold rounded-full hover:bg-red-700">
            Đăng
          </button>
        </div>
        <div className="relative">
          <div className="flex w-96 h-96 justify-center items-center 2xl:basis-2/5">
            {!selectedFile ? (
              <label className="w-full h-full max-w-3xl cursor-pointer border border-dashed border-gray-400 bg-gray-100 rounded-3xl flex flex-col justify-center items-center">
                <UploadFileIcon />
                <span>Upload File</span>
                <input
                  type="file"
                  className="hidden"
                  {...register("image")}
                  onChange={(e) => handleUploadImage(e)}
                />
              </label>
            ) : (
              <div className="relative border border-gray-200 rounded-lg">
                <img src={selectedFile} className="object-contain" />
                <button
                  onClick={handleDeleteImage}
                  className="btn btn-circle border-none bg-gray-200 hover:bg-gray-300 absolute -top-5 -right-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Tiêu đề</span>
              </div>
              <input
                type="text"
                placeholder="Tiêu đề"
                className="input input-bordered w-full"
                {...register("postTitle", {
                  required: { value: true, message: "Nhập tiêu đề" },
                })}
              />
              <p className="error">{errors.postTitle?.message}</p>
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Mô tả</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Mô tả"
                {...register("postDescription", {
                  required: { value: true, message: "Nhập mô tả" },
                })}
              ></textarea>
              <p className="error">{errors.postDescription?.message}</p>
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Chọn chủ đề</span>
              </div>
              <select
                className="select select-bordered"
                {...register("categoryId", {
                  required: { value: true, message: "Chọn chủ đề" },
                })}
              >
                <option disabled selected>
                  Chọn chủ đề
                </option>
                {categoryList.map((c) => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
              <p className="error">{errors.categoryId?.message}</p>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPostPage;
