import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api slice
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com",
  }),
  endpoints: () => ({}),
});

// export api slice
export default apiSlice;
