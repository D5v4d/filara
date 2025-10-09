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
    { imgUrl: "/sidebar/users.svg", text: "Заявки", nav: "/applications" },
    { imgUrl: "/sidebar/products.svg", text: "Продукты", nav: "/products" },
    { imgUrl: "/sidebar/users.svg", text: "Пользователи", nav: "/users" },
    { imgUrl: "/sidebar/categories.svg", text: "Категории", nav: "/categories" },
    { imgUrl: "/sidebar/cities.svg", text: "Города", nav: "/cities" },
    { imgUrl: "/sidebar/brands.svg", text: "Бренды", nav: "/brands" },
    { imgUrl: "/sidebar/protocols.svg", text: "Протоколы", nav: "/protocols" },
    { imgUrl: "/sidebar/orders.svg", text: "Заказы", nav: "/orders" },
    { imgUrl: "/sidebar/banners.svg", text: "Баннеры", nav: "/banners" },
    { imgUrl: "/sidebar/seminars.svg", text: "Семинары", nav: "/seminars" },
    { imgUrl: "/sidebar/promo-codes.svg", text: "Промокоды", nav: "/promo-codes" },
    { imgUrl: "/sidebar/settings.svg", text: "Настройки", nav: "/settings" },
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
