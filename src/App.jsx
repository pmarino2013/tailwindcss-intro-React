const App = () => {
  return (
    <div className=" p-2 bg-slate-200 h-screen">
      <h1 className="text-4xl text-center mb-5">Tailwindcss✨</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="bg-gray-50 rounded-2xl px-8 py-3 flex gap-2">
          <picture>
            <img
              src="https://tailwindcss.com/_next/static/media/erin-lindford.0sv7~gc~8i-hf.jpg"
              alt="imagen"
              className="w-25 rounded-full"
            />
          </picture>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl">Erin Lindford</h3>
            <p className="text-slate-500">Product Engineer</p>
            <button className="rounded-4xl border py-1 px-3 mt-2 text-purple-600 md:hover:text-gray-50 md:hover:bg-purple-600 active:bg-purple-600 active:text-gray-50">
              Message
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default App;
