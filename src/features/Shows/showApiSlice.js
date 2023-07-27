import { ApiKey, seriesText } from "../../assets/api/ApiKey";
import apiSlice from "../../assets/api/apiSlice";

// create show api slice
const showApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllShows: builder.query({
      query: () => `?apiKey=${ApiKey}&s=${seriesText}&type=series`,
    }),
    getSingleShow: builder.query({
      query: (id) => `?apiKey=${ApiKey}&i${id}&Plot=full`,
    }),
  }),
});

// export endpoints
export const { useGetAllShowsQuery, useGetSingleShowQuery } = showApiSlice;

// export movie api slice
export default showApiSlice;
