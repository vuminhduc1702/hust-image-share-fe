import { categoryList } from "../../assets/category";
import React, { useEffect, useState } from "react";
import PostService from "../../services/postService/PostService";
import { useParams } from "react-router-dom";
import PublicService from "../../services/publicService/PublicService";
import PostList from "../../components/PostList/PostList";
import CategoryHero from "../../components/CategoryHero/CategoryHero";

const IdeasPage = () => {
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const response1 = await PublicService.getCategoryById(categoryId);
        setCategory(response1.data);
        const response2 = await PostService.getPostsByCategory(categoryId);
        setPosts(response2.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full px-3 pt-5 2xl:w-5/6 m-auto">
      <CategoryHero category={category} />

      <div>
        <h1 className="m-auto text-center py-8 text-4xl font-semibold">
          {category?.categoryTitle} pictures
        </h1>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default IdeasPage;
