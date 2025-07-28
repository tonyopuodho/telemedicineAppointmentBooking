import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'


const PatientProfile = () => {
    const [userProfile,setUserProfile] = useState([])
    
    
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get("http://localhost:3000/auth/patientName")
        .then(result => {
            if (result.data.valid) {
                const patientId = result.data.patientId
                axios.get(`http://localhost:3000/auth/patientDetail/${patientId}`)
                .then(result => {
                    if(result.data.status) {
                        setUserProfile({
                            id:patientId,
                            firstName:result.data.Result[0].firstName,
                            lastName:result.data.Result[0].lastName,
                            email:result.data.Result[0].email,
                            phone:result.data.Result[0].phone,
                            address:result.data.Result[0].address,
                            dateOfbirth:result.data.Result[0].dateOfbirth                            
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
     axios.put("http://localhost:3000/auth/patientDetail",userProfile)
     .then(result => {
        if(result.data.status) {
            toast.success(result.data.message)
        }else {
            toast.error(result.data.message)
        }
     })
     .catch(error => console.log(error))
   }
    

    return(
        <div className="p-4">
            <div className="cardAp p-4 mt-6 rounded-md shadow-md">
                <form className="p-3 w-full" onSubmit={handleSubmit}>
                  <div className="flex gap-8">
                        <div>
                        <label className="font-bold">First name</label>
                        <input type="text" value={userProfile.firstName} onChange={(event) => setUserProfile({...userProfile, firstName:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">Email</label>
                        <input type="text" value={userProfile.email} onChange={(event) => setUserProfile({...userProfile, email:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Address</label>
                        <input type="text" value={userProfile.address} onChange={(event) => setUserProfile({...userProfile, address:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                       
                    </div>
                    <div>
                        <label className="font-bold">Last name</label>
                        <input type="text" value={userProfile.lastName} onChange={(event) => setUserProfile({...userProfile, lastName:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">phone</label>
                        <input type="text" value={userProfile.phone} onChange={(event) => setUserProfile({...userProfile, phone:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Date of birth</label>
                        <input type="date" value={userProfile.dateOfbirth} onChange={(event) => setUserProfile({...userProfile, dateOfbirth:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                          
                    </div>
                  </div>
                  <button type="submit" className="card w-[20%] p-2 mt-3 ml-[40%] rounded-sm shadow-md font-bold cursor-pointer">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default PatientProfile