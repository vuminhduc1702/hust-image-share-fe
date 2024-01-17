import api from "../config/ApiConfig";

const PostService = {
  getPostsByCategory(categoryId) {
    return api.get(`/api/user/post/${categoryId}`);
  },
  searchPost(keyword) {
    return api.get("/api/user/post", {
      params: {
        keyword: keyword,
      },
    });
  },
  createNewPost(data) {
    return api.post("/api/user/post", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default PostService;
