import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main";
import Axios from "./pages/Axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/axios" element={<Axios />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
