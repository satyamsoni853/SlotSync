/* eslint-disable no-unused-vars */
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import MyAppointment from "./Pages/MyAppointments";
import MyProfile from './Pages/MyProfile'
import Doctor from './Pages/Doctor'
import Appointment from "./Pages/Appointment";
import UserLogin from "./Componets/UserLogin/UserLogin";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import DoctorLogin from "./Componets/DoctorLogin/DoctorLogin";
import Aichat from "./Componets/AiChat/Aichat";

function App() {
  return <div className="mx-4 sm:mx-[10%]" >
    <Navbar></Navbar>
    <Routes>


      <Route path="/Home" element={<Home/>} />
      <Route path="/Doctor" element={<Doctor/>} />
      <Route path="/Doctor/:specialty" element={<Doctor/>} />
      <Route path="/MyProfile" element={<MyProfile/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/MyAppointment" element={<MyAppointment/>} />
      <Route path="/appointment/:docID" element={<Appointment/>} />
      <Route path="/" element={<UserLogin/>} />
      <Route path="/DoctorLogin" element={<DoctorLogin/>} />
      <Route path="/ai-chat" element={<Aichat/>} />


    </Routes>
    <Footer/>
 
  </div>;
}

export default App;
