import { Route, Routes } from "react-router-dom"
import LoginPage from "../components/login/login"
import Dashboard from "../components/dashboard/dashboard"
import ManageDoctors from "../components/doctors/manageDoctors"
import FeedBack from "../components/feedback/feedback"
import Appointment from "../components/appointment/appointment"
import Calender from "../components/calender/calender"
import Patients from "../components/patients/patients"
import Home from "../components/dashboard/home"
import Register from "../components/register/register"
import PatientLogin from "../components/login/patientlogin"
import DashboardPatient from "../components/dashboard/patient/patientDashboard"
import PatientHome from "../components/dashboard/patient/home"
import PatientFeedback from "../components/feedback/patientFeedback"
import PatientAppointment from "../components/appointment/patientAppointment"
import PatientProfile from "../components/profile/patientProfile"
import DoctorDashboard from "../components/dashboard/doctor/dashboard"
import DoctorHome from "../components/dashboard/doctor/home"
import DoctorAppointment from "../components/appointment/doctorAppointment"
import DoctorProfile from "../components/profile/doctorProfile"
import AddDoctor from "../components/add/addDoctor"


function App() {
  

  return (
    <Routes>
      <Route path="register" element={<Register/>}/>
      <Route path="/patientportal" element={<PatientLogin/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/doctorDashboard" element={<DoctorDashboard/>}>
        <Route path="" element={<DoctorHome/>}></Route>
        <Route path="/doctorDashboard/appointment" element={<DoctorAppointment/>}></Route>
        <Route path="/doctorDashboard/calendar" element={<Calender/>}></Route>
        <Route path="/doctorDashboard/profile" element={<DoctorProfile/>}></Route>
      </Route>
      <Route path="/patientDashboard" element={<DashboardPatient/>}>
       <Route path="" element={<PatientHome/>}></Route>
       <Route path="/patientDashboard/feedback" element={<PatientFeedback/>}></Route>
       <Route path="/patientDashboard/appointment" element={<PatientAppointment/>}></Route>
       <Route path="/patientDashboard/calendar" element={<Calender/>}></Route>
       <Route path="/patientDashboard/profile" element={<PatientProfile/>}></Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="" element={<Home/>}></Route>
        <Route path="/dashboard/manageDoctors" element={<ManageDoctors/>}></Route>
        <Route path="/dashboard/manageDoctors/addDoctor" element={<AddDoctor/>}></Route>
        <Route path="/dashboard/feedback" element={<FeedBack/>}></Route>
        <Route path="/dashboard/appointment" element={<Appointment/>}></Route>
        <Route path="/dashboard/calender" element={<Calender/>}></Route>
        <Route path="/dashboard/patient" element={<Patients/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
