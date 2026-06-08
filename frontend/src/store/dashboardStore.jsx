import {
  createContext,
  useContext,
  useState,
  useCallback
} from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({
  children
}) => {

  const [loading, setLoading] =
    useState(false);

  const [dashboardData, setDashboardData] =
    useState({
      revenue: 0,
      forecastAccuracy: 0,
      inventoryHealth: 0,
      activeUsers: 0,
      notifications: 0,
      totalForecasts: 0
    });

  const [recentActivities,
    setRecentActivities] = useState([]);

  const [systemStatus,
    setSystemStatus] = useState({
      api: "Healthy",
      database: "Healthy",
      scheduler: "Running"
    });

  const updateDashboard = useCallback(
    (data) => {

      setDashboardData((prev) => ({
        ...prev,
        ...data
      }));

    },
    []
  );

  const updateActivities = useCallback(
    (activities) => {

      setRecentActivities(activities);

    },
    []
  );

  const updateSystemStatus = useCallback(
    (status) => {

      setSystemStatus((prev) => ({
        ...prev,
        ...status
      }));

    },
    []
  );

  const refreshDashboard = async () => {

    try {

      setLoading(true);

      // API Integration

      // const response =
      // await dashboardApi.getDashboard();

      // setDashboardData(response.data);

      await new Promise(resolve =>
        setTimeout(resolve, 1000)
      );

    } catch (error) {

      console.error(
        "Dashboard refresh failed:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <DashboardContext.Provider
      value={{
        loading,

        dashboardData,
        recentActivities,
        systemStatus,

        updateDashboard,
        updateActivities,
        updateSystemStatus,

        refreshDashboard
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {

  const context =
    useContext(DashboardContext);

  if (!context) {

    throw new Error(
      "useDashboard must be used within DashboardProvider"
    );

  }

  return context;
};