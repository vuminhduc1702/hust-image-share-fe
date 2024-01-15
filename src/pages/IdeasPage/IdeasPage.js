import { categoryList } from "../../assets/category";
import React, { useEffect, useState } from "react";

const ImagesPage = ({ params }) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    const c = categoryList.find((cat) => cat.id === params.id);
    setCategory(c);
  }, []);

  return <div>{/* <h1>{category.name}</h1> */}</div>;
};

export default ImagesPage;
