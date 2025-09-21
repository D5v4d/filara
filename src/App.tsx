import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Authorization from "./page/Authorization";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/authorization" element={<Authorization />}></Route>
    </Routes>
  );
}

export default App;
