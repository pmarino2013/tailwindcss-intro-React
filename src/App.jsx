import { BrowserRouter, Routes, Route } from "react-router";
import RoutesBasic from "./routes/RoutesBasic";
import LoginScreen from "./views/LoginScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesBasic />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
