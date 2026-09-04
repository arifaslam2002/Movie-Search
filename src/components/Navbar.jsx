import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">
        MovieMania 🎥
      </h1>

      <div className="flex gap-6 text-white">
        <Link to={"/"}><a>Home</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;