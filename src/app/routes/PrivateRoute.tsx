// PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = localStorage.getItem("accountstoken");

  if (!token) {
    // Если токена нет, перенаправляем на страницу авторизации
    return <Navigate to="/Authorization" replace />;
  }

  // Если токен есть, рендерим вложенные маршруты через Outlet
  return <Outlet />;
};