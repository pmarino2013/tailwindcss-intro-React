import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../helpers/fetchUsers";
const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [edad, setEdad] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then((response) => {
      setUser(response);
      setEdad(
        new Date().getFullYear() - Number(response.birth_date.split("-")[0]),
      );
    });
  }, [id]);

  return (
    <div className="flex justify-center mt-5 flex-col items-center">
      <h1 className="text-4xl">Profile</h1>
      {user ? (
        <div className="mt-3 p-3">
          <article className="border w-80 rounded-2xl flex items-center">
            <header>
              <img
                src={user.avatar_url}
                alt={user.name}
                className="rounded-bl-2xl rounded-tl-2xl"
              />
            </header>
            <section className="px-2 text-center">
              <h3 className="text-center font-bold">{user.name}</h3>
              <p className="text-sm">{user.email}</p>
              <p>{user.phone}</p>
              <p>{edad} años</p>
            </section>
            <footer></footer>
          </article>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <h3>Cargando...</h3>
        </div>
      )}
    </div>
  );
};

export default UserScreen;
