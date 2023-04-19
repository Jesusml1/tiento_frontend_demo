import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import VerifyEmail from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
// import { useUserAuth } from "./hooks/useUserAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

// function RequireAuth({ children }: { children: JSX.Element }) {
//   const { user } = useUserAuth();
//   let location = useLocation();

//   if (!user) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   return children;
// }

export default App;
