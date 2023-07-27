import "./Movies.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useGetSingleMovieQuery } from "./movieApiSlice";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { imdbID } = useParams();
  const { isSuccess, data, isError, error } = useGetSingleMovieQuery(imdbID);

  if (isError) {
    console.log(error.error);
  }

  if (isSuccess) {
    console.log(data);
  }
  return (
    <>
      <Header />
      <div>
        <div className="movie-section">
          <div className="section-left">
            <div className="movie-title">{data?.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data?.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data?.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data?.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calender"></i> : {data?.Year}
              </span>
            </div>
            <div className="movie-plot">{data?.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data?.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data?.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data?.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data?.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data?.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data?.Poster} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleMovie;
