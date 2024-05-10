import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './assets/App.css'
import Home from './Front/Home'
import SignUpForm from './Front/SignUpForm'
import LoginForm from './Front/LoginForm'

function App() {
  const [count, setCount] = useState(0);
  // ALT SHIFT F HDP
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/logIn" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

