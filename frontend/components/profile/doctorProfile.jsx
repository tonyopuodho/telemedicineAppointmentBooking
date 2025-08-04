import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const DoctorProfile = () => {
    const [profile,setProfile] = useState([])
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get('http://localhost:3000/api/username')
        .then(result =>{
            if (result.data.valid) {
                const doctorId = result.data.doctorId
                axios.get(`http://localhost:3000/api/doctor/${doctorId}`)
                .then(result => {
                    if (result.data.status) {
                           setProfile({
                            id:doctorId,
                            firstName:result.data.Result[0].firstName,
                            lastName:result.data.Result[0].lastName,
                            phone:result.data.Result[0].phone,
                            email:result.data.Result[0].email,
                            schedule:result.data.Result[0].schedule,
                            specialty:result.data.Result[0].specialization,
                            image:result.data.Result[0].image                            
                        })
                    }
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error))
    },[])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put('http://localhost:3000/api/doctor',profile)
        .then(result => {
            if (result.data.status) {
                toast.success(result.data.message)
            } else {
                toast.error("An error occured")
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <div className="p-4">
            <div className="shadow-md rounded-sm p-4 mt-6 w-[50%] ml-[25%] flex flex-col">
              <img src={'http://localhost:3000/images/' + profile.image} alt=""  className="w-70 h-70 ml-40 mb-2"/>
               <form onSubmit={handleSubmit}>
                <div className="flex gap-8">
                        <div>
                        <label className="font-bold">First name</label>
                        <input type="text" value={profile.firstName} onChange={(event) => setProfile({...profile, firstName:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">Email</label>
                        <input type="text" value={profile.email} onChange={(event) => setProfile({...profile, email:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Schedule</label>
                        <input type="text" value={profile.schedule} onChange={(event) => setProfile({...profile, schedule:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                       
                    </div>
                    <div>
                        <label className="font-bold">Last name</label>
                        <input type="text" value={profile.lastName} onChange={(event) => setProfile({...profile, lastName:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">phone</label>
                        <input type="text" value={profile.phone} onChange={(event) => setProfile({...profile, phone:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Specialty</label>
                        <input type="text" value={profile.specialty} onChange={(event) => setProfile({...profile, specialty:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                          
                    </div>
                  </div>
                  <button type="submit" className="card w-[20%] p-2 mt-3 ml-[40%] rounded-sm shadow-md font-bold cursor-pointer">Edit</button>
               </form>
            </div>
        </div>
    )
}

export default DoctorProfile