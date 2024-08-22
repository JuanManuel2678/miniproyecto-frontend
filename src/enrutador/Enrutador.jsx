import { Route, Routes } from "react-router";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { InfoPersonal } from "../pages/InfoPersonal";
import { ChangeInfo } from "../pages/ChangeInfo";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Enrutador = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<InfoPersonal />} />
        <Route path="/update" element={<ChangeInfo />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
