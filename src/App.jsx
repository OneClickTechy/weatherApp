import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { createContext, useEffect, useState } from "react";
import { useGetCurrentWeatherQuery } from "./app/services/weatherData";
import { useGetAreaQuery } from "./app/services/areaData";
import Weather from "./pages/weather/Weather";
import ErrorPage from "./components/404Error/ErrorPage";
export const SearchValueContext = createContext(null);

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [areaName, setAreaName] = useState("tamilnadu");
  const [coord, setCoord] = useState({
    lat: 11.521249871542334,
    long: 78.70121519952852,
  });
  const { data, isLoading, error, originalArgs } =
    useGetCurrentWeatherQuery(areaName);
  const areaCoord = useGetAreaQuery(areaName);
  console.log(areaCoord);
  const handleSearchWeather = (e) => {
    e.preventDefault();
    setAreaName(searchValue);
  };
  useEffect(() => {
    if (areaCoord.isSuccess && areaCoord.data && areaCoord.data.length > 0) {
      const firstLocation = areaCoord.data[0];
      setCoord({
        lat: firstLocation.lat,
        long: firstLocation.lon,
      });
      console.log(firstLocation);
      console.log(coord)
    }
  }, [areaCoord.isSuccess, areaCoord.data]);

  return (
    <>
      <SearchValueContext.Provider
        value={{
          searchValue,
          setSearchValue,
          handleSearchWeather,
          error,
          isLoading,
          data,
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Weather />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SearchValueContext.Provider>
    </>
  );
};

export default App;
