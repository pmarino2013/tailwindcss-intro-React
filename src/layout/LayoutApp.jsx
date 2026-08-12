import { Outlet } from "react-router";
import NavBarApp from "../components/NavBarApp";

const LayoutApp = () => {
  return (
    <>
      <NavBarApp />
      <Outlet />
    </>
  );
};

export default LayoutApp;
