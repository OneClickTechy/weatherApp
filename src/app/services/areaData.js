import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api_key = import.meta.env.VITE_API_KEY;

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.openweathermap.org/geo/1.0/direct",
  }),
  endpoints: (builder) => ({
    getArea: builder.query({
      query: (areaname) => `?q=${areaname}&appid=${api_key}`,
    }),
  }),
});

export const { useGetAreaQuery } = areaApi;
