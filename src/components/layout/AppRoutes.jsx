import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/home-page";
import AdminPage from "../../pages/admin-page";
import AuthPage from "../../pages/auth-page";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import VerifyAccount from "../auth/VerifyAccount";
import Error404Page from "../../pages/error-404-page";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404Page />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/auth" element={<AuthPage />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="verify" element={<VerifyAccount />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
