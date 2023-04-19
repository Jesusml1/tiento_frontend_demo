import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Outlet />
    </div>
  );
}

export default Layout;
