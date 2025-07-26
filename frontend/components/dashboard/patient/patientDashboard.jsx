import axios from "axios"
import { useEffect, useState } from "react"
import { FaAccusoft, FaCalendar, FaCalendarCheck, FaClipboardList, FaComment, FaCommentAlt, FaHome, FaPeopleArrows, FaPowerOff, FaUser, FaUserFriends, FaUserMd } from "react-icons/fa"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const DashboardPatient = () => {
    const [username,setUsername] = useState('')
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get("http://localhost:3000/auth/patientName")
        .then(result => {
            if (result.data.valid) {
                setUsername(result.data.username)
            } else {
                 navigate('/patientportal')              
            }
         })
        .catch(error => console.log(error))
    },[])
    
      const logout = () => {
        axios.get('http://localhost:3000/auth/logoutpatient')
        .then(result => {
            if(result.data.status) {
                toast.success(result.data.message)
                navigate('/patientportal')
            } else{
                toast.error("an error occured")
            }
        })
        .catch(error => console.log(error))
    }

    return(
         <div className="flex h-[100vh] w-[100%]">
            <div className="w-[20%] shadow-md h-[100vh] nav top-0 fixed z-10">
                <div className="flex">
                    <img src="/medical-view.svg" alt="logo" className="w-16 h-16 ml-4 mt-2 "/>
                    <h2 className="font-bold mt-6 ml-6 text-2xl">Medical view</h2>
                    
                </div>
               <ul className="flex flex-col p-6 gap-9">
                <li><Link to={"/patientDashboard"} className="flex items-center"><FaHome className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Dashboard</h2></Link></li>              
                <li><Link to={"/patientDashboard/feedback"} className="flex items-center"><FaComment className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Feedback</h2></Link></li>
                <li><Link to={"/patientDashboard/appointment"} className="flex items-center"><FaClipboardList className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Appointments</h2></Link></li>
                <li><Link to={"/patientDashboard/calendar"} className="flex items-center"><FaCalendarCheck className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Calendar</h2></Link></li>
                <li><Link to={"/patientDashboard/profile"} className="flex items-center"><FaUserFriends className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Profile</h2></Link></li>
                <li><Link onClick={() => logout()} className="flex items-center"><FaPowerOff className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Logout</h2></Link></li>
               </ul>
            </div>
            <div className="w-[80%] ml-[20%]">
                <nav className="w-full shadow-md top-0 sticky h-[10vh] bg-white pt-4">
                    <div className="flex  items-center font-bold text-2xl ml-[80%]">
                        <h3 className="mr-4 text-3xl">Hi, {username} </h3> <span><FaUser/></span>
                    </div>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardPatient