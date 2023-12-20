import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import VerifyEmail from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Banned from "./pages/Banned";
import Landing from "./pages/Landing";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import AppShellDemo from "./pages/Appshell";
import { CustomFonts } from "./Layout/CustomFonts";
import { useUserAuth } from "./hooks/useUserAuth";
import Community from "./pages/Community";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <CustomFonts />
      <Notifications position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <CheckAuth>
                <Home />
              </CheckAuth>
            }
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="community" element={<Community />} />
          <Route path="appshell" element={<AppShellDemo />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="banned" element={<Banned />} />
          <Route path="landing" element={<Landing />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

function CheckAuth({ children }: { children: JSX.Element }) {
  const { user } = useUserAuth();
  let location = useLocation();

  if (user !== null) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
