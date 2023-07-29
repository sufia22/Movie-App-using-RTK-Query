import { Link } from "react-router-dom";
import { useGetAllShowsQuery } from "./showApiSlice";

const Shows = () => {
  const { data } = useGetAllShowsQuery();
  return (
    <div className=" movies mx-4 ">
      <div className="headline">
        <h2>Shows</h2>
      </div>

      <div className="card-item ">
        {data?.Search.map((show) => (
          <Link key={show.imdbID} to={`/movie/${show.imdbID}`}>
            <div className="card-inner">
              <div className="card-top">
                <img src={show.Poster} alt={show.Title} />
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h4>{show.Title}</h4>
                  <p>{show.Year}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shows;
