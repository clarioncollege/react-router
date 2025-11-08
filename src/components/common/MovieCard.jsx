import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <Link
      to={`/movies/${props?.movieId}?title=${props?.movieTitle}`}
      className="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${props?.moviePoster}`}
        alt="Movie Poster"
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{props?.movieTitle}</h3>
        <div className="movie-rating">
          <div className="stars">
            <i className="fas fa-star"></i>
          </div>
          <span className="rating-value">{props?.ratings?.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
