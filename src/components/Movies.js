import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie-box">
      <img
        className="movie-box__img"
        src={coverImg}
        alt={title}
      />
      <h2 className="movie-box__title">
        <Link to={`{process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <p className="movie-box__summary">{summary}</p>
      <ul className="movie-box__genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
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
