import { useEffect, useState } from "react";
import { getUsers, getUserByCountry } from "./helpers/fetchUsers";
import CardUserApp from "./components/CardUserApp";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (!inputValue) {
      getUsers().then((respuesta) => {
        setUsuarios(respuesta);
        setMessage(null);
      });
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      getUserByCountry(inputValue).then((respuesta) => {
        if (respuesta?.message) {
          setMessage(respuesta.message);
        } else {
          setUsuarios(respuesta);
          setMessage(null);
        }
      });
    }
  };

  return (
    <div className=" p-2 bg-slate-200 min-h-screen">
      <h1 className="text-4xl text-center mb-5">Tailwindcss✨</h1>
      <div className=" mb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribe el país"
            className="w-full max-w-md rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-slate-700 shadow-sm outline-none ring-0 transition-all duration-200 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:shadow-md focus:ring-4 focus:ring-violet-200"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <p className="text-red-400 ml-1">{message}</p>
      </div>
      {usuarios.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usuarios.map((user) => (
            <CardUserApp user={user} key={user.id} />
          ))}
          {/* <article className="bg-gray-50 rounded-2xl px-8 py-3 flex gap-2">
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
        </article> */}
        </div>
      )}
    </div>
  );
};

export default App;
