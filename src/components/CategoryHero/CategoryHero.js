import React from "react";

const CategoryHero = ({ category }) => {
  return (
    <div
      className="hero w-full h-72 rounded-3xl text-white"
      style={{
        backgroundImage: `url(${category?.categoryBackgroundImageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-semibold">
            {category?.categoryTitle}
          </h1>
          <p className="mb-5 text-xl">{category?.categoryDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
