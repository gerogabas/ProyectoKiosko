import React, { useState } from "react";

// Constants for shared Tailwind CSS classes
const containerClasses =
  "w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 ring-2 ring-violet-500 ring-opacity-50";
const inputClasses =
  "mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500 text-white";
const buttonClasses =
  "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2";

const LoginForm = () => {
  // States for the inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Enviar solicitud POST a la API para iniciar sesión
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // transformas el JSON devuelto en un OBJETO
      const data = await response.json();

      if (response.ok) {
        //history.push('/dashboard');
        window.location.href = "/Materias";
      } else {
        // Si las credenciales son inválidas, mostrar mensaje de error
        setError("Correo electrónico o contraseña incorrectos.");
        alert("Error al iniciar sesión:", data);
      }
    } catch (error) {
      alert.error("Error al iniciar sesión:", error);
      setError(
        "Se produjo un error al iniciar sesión. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className={containerClasses}>
        <h2 className="text-3xl font-bold text-white text-center">Log In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormControl
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <FormControl
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div>
            <button type="submit" className={buttonClasses}>
              Log In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-zinc-400">
          No tienes cuenta?{" "}
          <a href="/signUp" className="text-violet-500 hover:text-violet-600">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

// A smaller component to handle input fields
function FormControl({ label, type, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300">{label}</label>
      <input
        type={type}
        name={label.toLowerCase()}
        required
        className={inputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default LoginForm;
