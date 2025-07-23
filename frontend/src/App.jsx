import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/login/login"
import Dashboard from "../components/dashboard/dashboard"
import ManageDoctors from "../components/doctors/manageDoctors"
import FeedBack from "../components/feedback/feedback"
import Appointment from "../components/appointment/appointment"
import Calender from "../components/calender/calender"
import Patients from "../components/patients/patients"
import Home from "../components/dashboard/home"


function App() {
  

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="" element={<Home/>}></Route>
        <Route path="/dashboard/manageDoctors" element={<ManageDoctors/>}></Route>
        <Route path="/dashboard/feedback" element={<FeedBack/>}></Route>
        <Route path="/dashboard/appointment" element={<Appointment/>}></Route>
        <Route path="/dashboard/calender" element={<Calender/>}></Route>
        <Route path="/dashboard/patient" element={<Patients/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
