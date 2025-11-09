import MovieCard from "../common/MovieCard";
import { useGetPopularMoviesMutation } from "../../lib/movie-apis";
import styles from "./Home.module.css";
import { useEffect } from "react";
function PopularMovies() {
  const [getPopularMovies, { data, error, isLoading, isSuccess, isError }] =
    useGetPopularMoviesMutation();

  useEffect(() => {
    getPopularMovies(1);
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <h2 className={styles.section_title}>Recommended For You</h2>
      <div className={styles.movies_grid}>
        {data &&
          data?.results &&
          data?.results.length > 0 &&
          data?.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movieTitle={movie.title}
              ratings={movie.vote_average}
              moviePoster={movie.poster_path}
              movieId={movie.id}
            />
          ))}
      </div>
    </div>
  );
}

export default PopularMovies;
