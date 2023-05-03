import { Route, Routes } from "react-router-dom";
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
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
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

export default App;
