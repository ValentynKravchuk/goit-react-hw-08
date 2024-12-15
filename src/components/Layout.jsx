import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default layout;
