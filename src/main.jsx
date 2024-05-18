import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Front/ErrorPage.jsx'
import Home from './Front/Home'
import SignUpForm from './Front/SignUpForm'
import LoginForm from './Front/LoginForm'
import Navbar from './Front/NavBar';
import Materias from './Front/Materias';
import Estudiantes from './Front/Estudiantes.jsx'
import EstudiantesDetail from './Front/EstudiantesDetail.jsx'
import ContactUsPage from './Front/Components/Contact.jsx'

const fetchEstudiantes = async () => {
  const response = await fetch('http://127.0.0.1:8000/estudiantes/'); // Ajusta la URL según tu API
  const data = await response.json();
  return data;
};

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    fetchEstudiantes().then(setEstudiantes);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <LoginForm /> },
        { path: "/signUp", element: <SignUpForm /> },
        { path: "/materias", element: <Materias /> },
        { path: "/estudiantes", element: <Estudiantes estudiantes={estudiantes} /> },
        { path: "/estudiantes/:legajo", element: <EstudiantesDetail estudiantes={estudiantes} /> },
        { path: "/contact", element: <ContactUsPage /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

{/*  Esta era la anterior forma que tenia configurado la App.jsx 
  <>
    <Routes>
      <Route path="/" element={<Home />}  ErrorBoundary={<ErrorPage />} errorElement={<ErrorPage />} />
      <Route path="/signUp" element={<SignUpForm />} />
      <Route path="/logIn" element={<LoginForm />} />
      <Route path="/materias" element={<Materias />} />
    </Routes>
  </> 
*/}