import api from "../config/ApiConfig";

const PublicService = {
  getAllCategories() {
    return api.get("/api/public/category");
  },
  getCategoryById(categoryId) {
    return api.get(`/api/public/category/${categoryId}`);
  },
};

export default PublicService;
