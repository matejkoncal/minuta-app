import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const smeApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://thingproxy.freeboard.io/fetch/https://www.sme.sk/ajax/sme/artemis/article-short-list",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetNewsQuery } = smeApi;
