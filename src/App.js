import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
