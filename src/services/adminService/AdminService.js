import api from "../config/ApiConfig";

const AdminService = {
  getAllPosts() {
    return api.get("/api/admin/post");
  },
  publishPost(postId) {
    return api.get(`/api/admin/post/${postId}/publish`);
  },
  unpublishPost(postId) {
    return api.get(`/api/admin/post/${postId}/unpublish`);
  },
};

export default AdminService;
