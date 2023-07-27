import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Movies.scss";
import Shows from "../Shows/Shows";
import banner from "../../components/images/banner.png";
import { useGetAllMoviesQuery } from "./movieApiSlice";

const Movies = () => {
  const { data, isLoading, isError, error, isSuccess } = useGetAllMoviesQuery();

  if (isLoading) {
    return <h1>Loading . . .</h1>;
  }

  if (isError) {
    return <h3>{error.error}</h3>;
  }

  if (isSuccess) {
    console.log(data);
  }

  return (
    <>
      <Header />
      <div className="banner">
        <img src={banner} alt="" />
      </div>

      <div className=" movies mx-4">
        <div className="headline ">
          <hr />
          <h2>Movies</h2>
          <hr />
        </div>

        <div className="card-item ">
          {data?.Search.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <div className="card-inner">
                <div className="card-top">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="card-bottom">
                  <div className="card-info">
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* shows */}
      <Shows />

      <Footer />
    </>
  );
};

export default Movies;
