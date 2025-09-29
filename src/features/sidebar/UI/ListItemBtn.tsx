import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ItemBtn } from "./ItemBtn";
import { useLocation, useNavigate } from "react-router-dom";

export const ListItemBtn = () => {
  const location = useLocation();
  const path = location.pathname;
  const segment = "/" + path.split("/").filter(Boolean)[0];
  const [activeBtn, setActiveBtn] = useState(segment);

  useEffect(() => {
    setActiveBtn(segment);
  }, [path, segment]);

  const navigate = useNavigate();
  const items = [
    { imgUrl: "/application.svg", text: "Заявки", nav: "/applications" },
    { imgUrl: "/products.svg", text: "Продукты", nav: "/products" },
    { imgUrl: "/users.svg", text: "Пользователи", nav: "/users" },
    { imgUrl: "/categories.svg", text: "Категории", nav: "/categories" },
    { imgUrl: "/cities.svg", text: "Города", nav: "/cities" },
    { imgUrl: "/brands.svg", text: "Бренды", nav: "/brands" },
    { imgUrl: "/protocols.svg", text: "Протоколы", nav: "/protocols" },
    { imgUrl: "/orders.svg", text: "Заказы", nav: "/orders" },
    { imgUrl: "/banners.svg", text: "Баннеры", nav: "/banners" },
    { imgUrl: "/seminars.svg", text: "Семинары", nav: "/seminars" },
    { imgUrl: "/promo-codes.svg", text: "Промокоды", nav: "/promo-codes" },
    { imgUrl: "/settings.svg", text: "Настройки", nav: "/settings" },
  ];

  const activeNav = (nav: string) => {
    setActiveBtn(nav);
    navigate(nav);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item) => (
        <ItemBtn key={item.nav} imgUrl={item.imgUrl} text={item.text} isActive={activeBtn === item.nav} onClick={() => activeNav(item.nav)} />
      ))}
    </Box>
  );
};
