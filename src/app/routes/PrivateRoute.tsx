// PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";

export const PrivateRoute = () => {
  const token = localStorage.getItem("accountstoken");

  if (!token) {
    // Если токена нет, перенаправляем на страницу авторизации
    return <Navigate to="/Authorization" replace />;
  }

  // Если токен есть, рендерим вложенные маршруты через Outlet
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet /> {/* Сюда рендерится дочерний маршрут: <Main />, <Profile /> и т.д. */}
      </main>
    </>
  );
};
