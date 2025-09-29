import { Route, Routes } from "react-router-dom";
import { AuthForm } from "../pages/AuthForm";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import Main from "../pages/Main";
import Applications from "../pages/Applications";
import Banners from "../pages/Banners";
import Brands from "../pages/Brands";
import Categories from "../pages/Categories";
import Cities from "../pages/Cities";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import PromoCodes from "../pages/PromoCodes";
import Protocols from "../pages/Protocols";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import Seminars from "../pages/Seminars";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/Authorization" element={<AuthForm />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/protocols" element={<Protocols />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/promo-codes" element={<PromoCodes />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
