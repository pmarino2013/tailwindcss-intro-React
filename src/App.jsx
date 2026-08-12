import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import Error404Screen from "./views/Error404Screen";
import LayoutApp from "./layout/LayoutApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="*" element={<Error404Screen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
