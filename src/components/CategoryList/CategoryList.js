import React from "react";
import { Link } from "react-router-dom";
import { categoryList } from "../../assets/category";

const CategoryList = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-semibold m-auto text-center my-16">
        Khám phá những điều hay nhất trên HUST
      </h1>
      <div className="grid grid-cols-2 gap-3 w-2/3 m-auto xl:grid-cols-4 xl:w-5/6">
        {categoryList.map((category) => (
          <Link
            to={`/ideas/${category.id}`}
            className="relative w-full h-40 rounded-3xl overflow-hidden cursor-pointer hover:brightness-50"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute w-full h-full flex justify-center items-center bottom-0 text-white text-2xl font-semibold">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
