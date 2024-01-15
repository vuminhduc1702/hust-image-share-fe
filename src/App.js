import { Route, Routes } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute/AuthRoute";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CreateNewPostPage from "./pages/CreateNewPostPage/CreateNewPostPage";

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
      </Routes>
    </div>
  );
}

export default App;
