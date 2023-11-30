import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./ui/pages/list";
import Home from "./ui/pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
