import React from 'react'
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
import ContactUsPage from './Front/Components/Contact.jsx'
const sampleStudents = [
  { id: 1, name: 'John', surname: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  // Add more student data here if needed
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signUp",
        element: <SignUpForm />,
      },
      {
        path: "/materias",
        element: <Materias />,
      },
      {
        path: "/estudiantes",
        element: <Estudiantes />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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