import axios from "axios";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovies = async () => {
    const randomPage = Math.floor(Math.random() * 5);

    const response = await axios.get(
      `https://api.tvmaze.com/shows?page=${randomPage}`,
    );
    setMovies(response.data.slice(0, 100));
  };
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      const searchResults = response.data.map((result) => result.show);
      setMovies(searchResults);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <button
                onClick={fetchMovies}
                className="block mx-auto mt-5 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
              >
                🔄 Show All Movies
              </button>
              {loading ? (
                <Loading />
              ) : (
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.name}
                      rating={movie.rating?.average}
                      year={movie.premiered}
                      poster={movie.image?.medium}
                    />
                  ))}
                </div>
              )}
            </>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
