import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuthenticationButton from "../UserAuthenticationButton/UserAuthenticationButton";
import { useForm } from "react-hook-form";
import NavigationBarDropDown from "../NavigationBarDropDown/NavigationBarDropDown";

const NavigationBar = () => {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

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
        <NavigationBarDropDown />
      </div>

      <div
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 flex items-center gap-2"
      >
        <form className="flex-1 form-control">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="input w-full rounded-full bg-gray-200 border-none focus:outline-none"
            {...register("keyword", {
              required: { value: true },
            })}
          />
        </form>

        <UserAuthenticationButton />
      </div>
    </div>
  );
};

export default NavigationBar;
