import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  return (
    <Link to={`/movies/${props?.movieId}`} className={styles.movie_card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${props?.moviePoster}`}
        alt="Movie Poster"
        className={styles.movie_poster}
      />
      <div className={styles.movie_info}>
        <h3 className={styles.movie_title}>{props?.movieTitle}</h3>
        <div className={styles.movie_rating}>
          <div className={styles.stars}>
            <i className="fas fa-star"></i>
          </div>
          <span className={styles.rating_value}>
            {props?.ratings?.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
