import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
