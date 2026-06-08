import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Forecast from "../pages/Forecast";
import Analytics from "../pages/Analytics";
import Inventory from "../pages/Inventory";
import Monitoring from "../pages/Monitoring";
import Reports from "../pages/Reports";
import Notifications from "../pages/Notifications";
import Upload from "../pages/Upload";
import Users from "../pages/Users";
import Automation from "../pages/Automation";
import Integrations from "../pages/Integrations";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/users" element={<Users />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/settings" element={<Settings />} />

      </Route>

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}

export default AppRoutes;