const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">
        MovieMania 🎥
      </h1>

      <div className="flex gap-6 text-white">
        <a href="#">Home</a>
        <a href="#">Favorites</a>
      </div>
    </nav>
  );
};

export default Navbar;