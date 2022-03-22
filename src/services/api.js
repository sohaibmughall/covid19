// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const getstatespecific = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.covidtracking.com/v1/' }),
  endpoints: (builder) => ({
    getstates: builder.query({
      query: (name) => `states/${name}/info.json`,
    }),
  }),
  
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetstatesQuery } = getstatespecific
