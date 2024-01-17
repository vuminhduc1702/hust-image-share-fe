import { categoryList } from "../../assets/category";
import UploadFileIcon from "../../assets/icons/UploadFile";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostService from "../../services/postService/PostService";
import toast from "react-hot-toast";
import CloseIcon from "../../assets/icons/CloseIcon";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateNewPostPage = () => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (role !== 2) {
      navigate("/");
      toast.error("Unauthorized");
    }
  }, [role]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setFile(null);
      setSelectedFile(null);
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("postTitle", data.postTitle);
    formData.append("categoryId", data.categoryId);
    formData.append("postDescription", data.postDescription);
    formData.append("multipartFile", file);
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
    <div className="flex flex-col items-center gap-12 w-5/6 h-full m-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full pb-5">
        <div className="sticky top-0 z-40 flex justify-end pb-3 mb-3 h-16 border-b border-gray-200">
          <button className="btn bg-red-500 text-white font-semibold rounded-full hover:bg-red-700">
            Đăng
          </button>
        </div>
        <div className="relative flex flex-col xl:flex-row">
          <div className="flex w-full h-full justify-center items-center 2xl:basis-2/5">
            {!selectedFile ? (
              <label className="w-96 h-96 max-w-3xl cursor-pointer border border-dashed border-gray-400 bg-gray-100 rounded-3xl flex flex-col justify-center items-center">
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
              <div className="relative border border-gray-200 rounded-lg w-96 h-fit">
                <img src={selectedFile} className="w-full" />
                <button
                  onClick={handleDeleteImage}
                  className="btn btn-circle border-none bg-gray-200 hover:bg-gray-300 absolute -top-5 -right-5"
                >
                  <CloseIcon />
                </button>
              </div>
            )}
          </div>

          <div className="flex-1">
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
        </div>
      </form>
    </div>
  );
};

export default CreateNewPostPage;
