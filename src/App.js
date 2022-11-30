import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mypage from "./pages/mypage";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
