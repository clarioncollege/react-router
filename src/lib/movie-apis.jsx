import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = import.meta.env.VITE_API_KEY;

      headers.set("Authorization", `Bearer ${token}`);

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
