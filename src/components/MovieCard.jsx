import { Link } from "react-router-dom";

const MovieCard = ({id, title, rating, year, poster }) => {
  return (
<Link to={`/movie/${id}`}>
      <div className="bg-white rounded-xl shadow overflow-hidden w-64">
      <img
        src={poster}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-gray-600">⭐ {rating}</p>

        <p className="text-gray-600">📅 {year}</p>
      </div>
    </div>
</Link>
  );
};

export default MovieCard;