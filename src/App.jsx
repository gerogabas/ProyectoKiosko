import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import './assets/App.css'
import Home from './Front/Home'
import SignUpForm from './Front/SignUpForm'
import LoginForm from './Front/LoginForm'
import Navbar from './Front/NavBar';
import ErrorPage from './Front/ErrorPage';

function App() {
  // ALT SHIFT F HDP
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  ErrorBoundary={<ErrorPage />} errorElement={<ErrorPage />} />
        <Route path="/signUp" element={<SignUpForm />} ErrorBoundary={<ErrorPage />} errorElement={<ErrorPage />} />
        <Route path="/logIn" element={<LoginForm />} errorElement={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;

