import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const token = localStorage.getItem("accountstoken");

  if (token) {
    // Если пользователь уже авторизован — не пускаем на страницу входа
    return <Navigate to="/Seminars" replace />;
  }

  // Иначе — разрешаем рендерить дочерний элемент (в нашем случае <AuthForm />)
  return <Outlet />;
};