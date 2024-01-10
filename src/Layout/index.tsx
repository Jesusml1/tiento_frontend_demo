import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{ fontFamily: "sans-serif", width: "100%", height: "100%" }}
      className="layout"
    >
      <Outlet />
    </div>
  );
}

export default Layout;
