import { ApiKey, movieText } from "../../assets/api/ApiKey";
import apiSlice from "../../assets/api/apiSlice";

// create movie api slice
const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => `?apiKey=${ApiKey}&s=${movieText}&type=movie`,
    }),
    getSingleMovie: builder.query({
      query: (id) => `?apiKey=${ApiKey}&i=${id}`,
    }),
    searchTitle: builder.query({
      query: (title) => `?apiKey=${ApiKey}&s=${title}`,
    }),
  }),
});

// export endpoints
export const {
  useGetAllMoviesQuery,
  useGetSingleMovieQuery,
  useSearchTitleQuery,
} = movieApiSlice;

// export movie api slice
export default movieApiSlice;
