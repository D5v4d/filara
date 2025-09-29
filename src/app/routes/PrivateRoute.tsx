// PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Card, Container } from "@mui/material";
import { Sidebar } from "../../widgets/sidebar/UI/Sidebar";
import { routerConteiner } from "../css/CssComponentRouter";

export const PrivateRoute = () => {
  const token = localStorage.getItem("accountstoken");

  if (!token) {
    // Если токена нет, перенаправляем на страницу авторизации
    return <Navigate to="/Authorization" replace />;
  }

  // Если токен есть, рендерим вложенные маршруты через Outlet
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={routerConteiner}
    >
      <Header />
      <Sidebar />
      <Card component="main" sx={{ display: "flex", paddingTop: "24px", height: "872px", marginTop: "24px" }}>
        <Outlet /> {/* Сюда рендерится дочерний маршрут: <Main />, <Profile /> и т.д. */}
      </Card>
    </Container>
  );
};
