import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../components/Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__img}
        src={coverImg}
        alt={title}
      />
      <h2 className={styles.movie__title}>
        <Link to={`{process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p className={styles.movie__summary}>
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>[{g}]</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
