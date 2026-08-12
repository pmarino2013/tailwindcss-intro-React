import { Routes, Route } from "react-router";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";
import LayoutApp from "../layout/LayoutApp";
import UserScreen from "../views/UserScreen";
// import Error404Screen from "../views/Error404Screen";

const RoutesBasic = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="user/:id" element={<UserScreen />} />
        <Route path="*" element={<Error404Screen />} />
      </Route>
    </Routes>
  );
};

export default RoutesBasic;
