import './App.css'; 

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Notification from './Pages/Notification/Notification';
import FloatButton from './Components/FloatButton//FloatButton'
import DaftarJual from './Components/DaftarJual/DaftarJual'
import Login from './Pages/LogReg/Login';
import Register from './Pages/LogReg/Register';
import InfoProfile from './Pages/Profile/InfoProfile'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<DaftarJual/>} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/floatbutton" element={<FloatButton />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info" element={<InfoProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
