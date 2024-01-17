import { Route, Routes } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CreateNewPostPage from "./pages/CreateNewPostPage/CreateNewPostPage";
import IdeasPage from "./pages/IdeasPage/IdeasPage";
import PostPage from "./pages/PostPage/PostPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignupPage />
            </AuthRoute>
          }
        />
        <Route path="/create" element={<CreateNewPostPage />} />
        <Route path="/ideas/:categoryId" element={<IdeasPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
