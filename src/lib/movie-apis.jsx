import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

console.log("Base URL:", BASE_URL);
console.log("API Key:", API_KEY);

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", `Bearer ${API_KEY}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPopularMovies: builder.mutation({
      query: (page) => ({
        url: `/movie/popular?language=en-US&page=${page}`,
        method: "GET",
      }),
    }),

    getMovieDetails: builder.mutation({
      query: (movieId) => ({
        url: `/movie/${movieId}?language=en-US`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPopularMoviesMutation, useGetMovieDetailsMutation } =
  movieApi;
