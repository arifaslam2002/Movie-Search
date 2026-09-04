import { useState } from "react";
const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState("")
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Search Your Favorite Movies 🎬
      </h1>

      <div className="flex justify-center gap-2 mt-5">
        <input
          className="border rounded px-4 py-2 outline-none"
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => onSearch(query)}>
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;