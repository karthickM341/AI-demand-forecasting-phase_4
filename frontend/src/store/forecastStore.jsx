import {
  createContext,
  useContext,
  useState,
  useCallback
} from "react";

const ForecastContext = createContext();

export const ForecastProvider = ({
  children
}) => {

  const [loading, setLoading] =
    useState(false);

  const [forecastData, setForecastData] =
    useState([]);

  const [selectedModel,
    setSelectedModel] =
    useState("Ensemble");

  const [forecastMetrics,
    setForecastMetrics] =
    useState({
      accuracy: 0,
      confidence: 0,
      predictedDemand: 0,
      growthRate: 0
    });

  const [modelComparison,
    setModelComparison] =
    useState([]);

  const [forecastHistory,
    setForecastHistory] =
    useState([]);

  const [aiInsights,
    setAiInsights] =
    useState([]);

  const updateForecastData =
    useCallback((data) => {

      setForecastData(data);

    }, []);

  const updateMetrics =
    useCallback((metrics) => {

      setForecastMetrics((prev) => ({
        ...prev,
        ...metrics
      }));

    }, []);

  const updateModelComparison =
    useCallback((models) => {

      setModelComparison(models);

    }, []);

  const updateForecastHistory =
    useCallback((history) => {

      setForecastHistory(history);

    }, []);

  const updateInsights =
    useCallback((insights) => {

      setAiInsights(insights);

    }, []);

  const generateForecast =
    async (payload) => {

      try {

        setLoading(true);

        /*
        const response =
        await forecastApi.generate(
          payload
        );

        setForecastData(
          response.data.forecast
        );

        setForecastMetrics(
          response.data.metrics
        );
        */

        await new Promise(
          (resolve) =>
            setTimeout(resolve, 1200)
        );

      } catch (error) {

        console.error(
          "Forecast generation failed:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

  const clearForecast = () => {

    setForecastData([]);

    setForecastHistory([]);

    setAiInsights([]);

    setForecastMetrics({
      accuracy: 0,
      confidence: 0,
      predictedDemand: 0,
      growthRate: 0
    });
  };

  return (
    <ForecastContext.Provider
      value={{
        loading,

        forecastData,
        forecastMetrics,
        forecastHistory,
        modelComparison,
        aiInsights,
        selectedModel,

        setSelectedModel,

        updateForecastData,
        updateMetrics,
        updateModelComparison,
        updateForecastHistory,
        updateInsights,

        generateForecast,
        clearForecast
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecast = () => {

  const context =
    useContext(ForecastContext);

  if (!context) {

    throw new Error(
      "useForecast must be used inside ForecastProvider"
    );
  }

  return context;
};