import { Route, Routes } from "react-router-dom";
import { AuthForm } from "../pages/authForm/AuthForm";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import Main from "../pages/main/Main";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/Authorization" element={<AuthForm />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
