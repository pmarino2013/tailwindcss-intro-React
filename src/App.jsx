import { BrowserRouter, Routes, Route } from "react-router";
import RoutesBasic from "./routes/RoutesBasic";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesBasic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
