import { Link, Outlet, useNavigate } from "react-router-dom"
import { FaAccusoft, FaCalendar, FaCalendarCheck, FaClipboardList, FaComment, FaCommentAlt, FaHome, FaPeopleArrows, FaPowerOff, FaUser, FaUserFriends, FaUserMd } from "react-icons/fa"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const DoctorDashboard = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:3000/api/username')
        .then(result => {
            if (result.data.valid) {
                setUsername(result.data.username)
            } else {
                navigate('/doctorLogin')
            }
        })
        .catch(error => console.log(error))
    },[])

    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout')
        .then(result => {
            if(result.data.status) {
                toast.success(result.data.message)
                navigate('/doctorLogin')
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
                <li><Link to={"/doctorDashboard"} className="flex items-center"><FaHome className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Dashboard</h2></Link></li>
                <li><Link to={"/doctorDashboard/appointment"} className="flex items-center"><FaClipboardList className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Appointments</h2></Link></li>
                <li><Link to={"/doctorDashboard/calendar"} className="flex items-center"><FaCalendarCheck className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Calendar</h2></Link></li>
                <li><Link to={"/doctorDashboard/profile"} className="flex items-center"><FaUserMd className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Profile</h2></Link></li>
                <li><Link onClick={handleLogout} className="flex items-center"><FaPowerOff className="text-3xl"/>  <h2 className="ml-4 mt-2 text-xl font-bold">Logout</h2></Link></li>
               </ul>
            </div>
            <div className="w-[80%] ml-[20%]">
                <nav className="w-full shadow-md top-0 sticky h-[10vh] bg-white pt-4">
                    <div className="flex  items-center font-bold text-2xl ml-[80%]">
                        <h3 className="mr-4 text-3xl">Hi,Dr {username} </h3> <span><FaUser/></span>
                    </div>
                </nav>
             <Outlet/>
            </div>
        </div>
    )
}

export default DoctorDashboard