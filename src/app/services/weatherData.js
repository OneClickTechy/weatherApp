import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api_key = import.meta.env.VITE_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (areaName) => `/weather?q=${areaName}&appid=${api_key}`,
    }),
    getForecastWeather: builder.query({
      query: (areaName) => `/forecast?q=${areaName}&appid=${api_key}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } =
  weatherApi;
