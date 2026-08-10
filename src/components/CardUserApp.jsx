const CardUserApp = ({ user }) => {
  const { name, location, avatar_url } = user;

  return (
    <article className="bg-gray-50 rounded-2xl px-8 py-3 flex gap-2 justify-between grayscale hover:grayscale-0 transition-all ease-in hover:scale-101">
      <picture>
        <img src={avatar_url} alt={name} className="w-25 rounded-full" />
      </picture>
      <div className="flex flex-col justify-center items-center w-50 md:w-80">
        <h3 className="text-xl">{name}</h3>
        <p className="text-slate-500 text-sm">{location.city}</p>
        <button className="rounded-4xl border py-1 px-3 mt-2 text-purple-600 md:hover:text-gray-50 md:hover:bg-purple-600 active:bg-purple-600 active:text-gray-50">
          Message
        </button>
      </div>
    </article>
  );
};

export default CardUserApp;
