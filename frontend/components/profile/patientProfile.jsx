import axios from "axios"
import { useEffect, useState } from "react"


const PatientProfile = () => {
    const [userProfile,setUserProfile] = useState([])
    const [patientValue, setPatientValue] = useState([])    
    
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get("http://localhost:3000/auth/patientName")
        .then(result => {
            if (result.data.valid) {
                const patientId = result.data.patientId
                axios.get(`http://localhost:3000/auth/patientDetail/${patientId}`)
                .then(result => {
                    if(result.data.status) {
                        setUserProfile(result.data.Result)
                    }
                })
                .catch(error => console.log(error))                
            }
         })
        .catch(error => console.log(error))
    },[])
    
    const firstName =  userProfile.map((items) => items.firstName)
    const lastName = userProfile.map((items) => items.lastName)
    const email = userProfile.map((items) => items.email)
    const phone = userProfile.map((items) => items.phone)
    const address = userProfile.map((items) => items.address)
    const date = userProfile.map(items => items.dateOfbirth)

    return(
        <div className="p-4">
            <div className="cardAp p-4 mt-6 rounded-md shadow-md">
                <form className="p-3 w-full ">
                  <div className="flex gap-8">
                        <div>
                        <label className="font-bold">First name</label>
                        <input type="text" value={firstName}  onChange={(event) => setPatientValue({...patientValue, firstName:event.target.value})} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">Email</label>
                        <input type="text" value={email} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Address</label>
                        <input type="text" value={address} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                       
                    </div>
                    <div>
                        <label className="font-bold">Last name</label>
                        <input type="text" value={lastName} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">phone</label>
                        <input type="text" value={phone} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Date of birth</label>
                        <input type="date" value={date} className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                          
                    </div>
                  </div>
                  <button type="submit" className="card w-[20%] p-2 mt-3 ml-[40%] rounded-sm shadow-md font-bold cursor-pointer">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default PatientProfile