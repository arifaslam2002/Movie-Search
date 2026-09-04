const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-4">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

      <p className="text-lg font-semibold text-gray-700">
        Searching for shows...
      </p>
    </div>
  );
};

export default Loading;