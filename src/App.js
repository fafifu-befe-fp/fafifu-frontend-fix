import './App.css'; 

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Notification from './Pages/Notification/Notification';
import DaftarJual from './Components/DaftarJual/DaftarJual'
// import Info from './Pages/Profile/Info';
import Login from './Pages/LogReg/Login';
import Register from './Pages/LogReg/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<DaftarJual/>} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
