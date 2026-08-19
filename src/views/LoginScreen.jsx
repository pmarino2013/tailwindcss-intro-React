import { useForm } from "react-hook-form";
import { usuarios } from "../data/usuarios";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const LoginScreen = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const onSubmit = (data) => {
    const { correo, password } = data;

    const validar = usuarios.find(
      (user) => user.correo === correo && user.password === password,
    );

    if (validar) {
      setMessage("");

      const { id, nombre, correo } = validar;
      const user = {
        id,
        nombre,
        correo,
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <article className="w-80">
        <header className="mb-5">
          <h1 className="text-2xl text-center">Inicio de sesión</h1>
        </header>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <label>Correo:</label>
              <input
                type="email"
                className="border border-blue-500 rounded-md px-2 py-1 outline-none focus:ring-1 ring-blue-700"
                {...register("correo", {
                  required: "El campo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.correo && (
                <p className="text-red-700 m-0">{errors.correo.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label>Contraseña:</label>
              <input
                type="password"
                className="border border-blue-500 rounded-md px-2 py-1 outline-none ring-0 focus:ring-1 ring-blue-700"
                {...register("password", {
                  required: "El campo es obligatorio",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Tener al menos 8 caracteres, \nuna mayúscula, \nun número y un símbol",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>
            <div className="grid mt-5">
              <button className="border border-cyan-800 rounded-2xl bg-cyan-800 text-slate-50 py-1">
                Iniciar
              </button>
            </div>
          </form>
          {message && (
            <div className="grid mt-3 bg-pink-400 text-slate-50 p-2 text-center rounded-md ">
              <span>❌ {message}</span>
            </div>
          )}
        </section>
      </article>
    </div>
  );
};

export default LoginScreen;
