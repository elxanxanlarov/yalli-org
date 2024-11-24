import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
