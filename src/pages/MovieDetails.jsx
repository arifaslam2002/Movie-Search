import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}`
      );

      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <Loading />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="md:flex">

          {/* Poster */}
          <div className="md:w-1/3">
            <img
              src={movie.image?.original}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8 md:w-2/3">

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {movie.name}
            </h1>

            {/* Rating */}
            <p className="text-lg text-gray-600 mb-2">
              ⭐ Rating: {movie.rating?.average || "N/A"}
            </p>

            {/* Premiered */}
            <p className="text-lg text-gray-600 mb-2">
              📅 Premiered: {movie.premiered || "N/A"}
            </p>

            {/* Status */}
            <p className="text-lg text-gray-600 mb-2">
              📺 Status: {movie.status || "N/A"}
            </p>

            {/* Runtime */}
            <p className="text-lg text-gray-600 mb-2">
              ⏱️ Runtime: {movie.runtime || "N/A"} minutes
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 my-5">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Summary */}
            <h2 className="text-2xl font-bold mb-2">
              Summary
            </h2>

            <div
              className="text-gray-600 leading-7"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No summary available.",
              }}
            />

            {/* Official Website */}
            {movie.officialSite && (
              <a
                href={movie.officialSite}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Visit Official Site
              </a>
            )}

            {/* Back */}
            <div className="mt-6">
              <Link
                to="/"
                className="text-blue-600 hover:underline"
              >
                ← Back to Movies
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;