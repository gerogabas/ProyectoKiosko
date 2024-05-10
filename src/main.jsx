import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)





// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// import ErrorPage from './Front/ErrorPage.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   }
// ]);