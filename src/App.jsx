import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import Error404Screen from "./views/Error404Screen";
import NavBarApp from "./components/NavBarApp";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="*" element={<Error404Screen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
