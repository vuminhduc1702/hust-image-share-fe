import React, { useEffect, useState } from "react";
import PostService from "../../services/postService/PostService";
import toast from "react-hot-toast";
import PostList from "../../components/PostList/PostList";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [resultList, setResultList] = useState([]);
  const queryParam = new URLSearchParams(window.location.search);
  const keyword = queryParam.get("keyword");

  console.log(keyword);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await PostService.searchPost(keyword);
        setResultList(response.data);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };
    fetch();
  }, [resultList]);

  return (
    <div className="w-full px-3 pt-5 2xl:w-5/6 m-auto">
      <h1 className="m-auto text-center py-8 text-4xl font-semibold">
        Search results for: {keyword}
      </h1>
      {resultList.length > 0 ? (
        <PostList posts={resultList} />
      ) : (
        <div className="flex items-center justify-center gap-2 text-xl">
          <h1>{`Cannot find any post with \"${keyword}\"`}.</h1>
          <Link to="/" className="font-bold hover:underline">
            Return home
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
