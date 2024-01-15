import api from "../config/ApiConfig";

const PostService = {
  createNewPost(data) {
    return api.post("/api/user/post", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default PostService;
