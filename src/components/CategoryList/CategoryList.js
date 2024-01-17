import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PublicService from "../../services/publicService/PublicService";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    PublicService.getAllCategories().then((response) => {
      setCategoryList(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-semibold m-auto text-center my-16">
        Khám phá những điều hay nhất trên HUST
      </h1>
      <div className="grid grid-cols-2 gap-3 w-2/3 m-auto xl:grid-cols-4 xl:w-5/6">
        {categoryList.map((category) => (
          <Link
            to={`/ideas/${category.categoryId}`}
            className="relative w-full h-40 rounded-3xl overflow-hidden cursor-pointer hover:brightness-50"
          >
            <img
              src={category.categoryImageUrl}
              alt={category.categoryTitle}
              className="object-cover w-full h-full"
            />
            <div className="absolute w-full h-full flex justify-center items-center bottom-0 text-white text-2xl font-semibold">
              {category.categoryTitle}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
