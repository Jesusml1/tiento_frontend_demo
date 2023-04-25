import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import VerifyEmail from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Banned from "./pages/Banned";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="banned" element={<Banned />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
