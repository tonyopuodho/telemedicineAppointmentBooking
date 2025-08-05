import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom"
import { FaSpinner } from 'react-icons/fa'

const BookAppointment = () => {
    const [patient, setPatient] = useState([])
    const [doctor, setDoctor] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    
    useEffect(() => {
        axios.get(`http://localhost:3000/api/doctor/${id}`)
        .then(result => {
            if (result.data.status) {
                setDoctor(result.data.Result)
            }
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        axios.get("http://localhost:3000/auth/patientName")
        .then(result => {
            if (result.data.valid) {
                const patientId = result.data.patientId
                axios.get(`http://localhost:3000/auth/patientDetail/${patientId}`)
                .then(result => {
                    if(result.data.status) {
                        setPatient({
                            patient_id:patientId,
                            doctor_id: id,   
                            firstName:result.data.Result[0].firstName,
                            lastName:result.data.Result[0].lastName,                        
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
        setLoading(true)
        axios.post('http://localhost:3000/api/bookAppointment',patient)
        .then(result => {
            if (result.data.status) {
                toast.success(result.data.message)
                setLoading(false)
            } else {
                toast.error("An error occured please try again later")
                setLoading(false)
            }
        })
        .catch(error => console.log(error)) 
    }

    return (
        <div className="p-5">
            
                {
                    doctor.map((item,index) => (
                        <div key={index} className="p-4 rounded-sm shadow-md w-[50%] mb-3 flex gap-12 mt-3">
                        <img src={`http://localhost:3000/images/` + item.image} alt="" />
                        <div className="pt-2 mb-2 mt-3">
                            <p><span className="font-bold">Name:</span> {item.firstName} {item.lastName}</p>
                            <p><span className="font-bold">Specialty:</span> {item.specialization}</p>
                            <p><span className="font-bold">Schedule</span> {item.schedule}</p>
                            <p><span className="font-bold">Phone:</span> {item.phone}</p>
                            <p><span className="font-bold">Email:</span> {item.email}</p>
                        </div>
                        </div>
                    ))
                }
    
            <div className="p-4 cardAp shadow-md rounded-sm mt-14">
                
                <form className="p-2" onSubmit={handleSubmit}>
                   <div className="flex gap-12 p-2">
                    <div className="flex flex-col w-full">
                         <label htmlFor="" className="font-bold">Doctor's Name</label>
                         <input type="text" value={doctor.map((index, key) => index.firstName)} className="w-full p-2 outline-none"/>
                    </div>
                      <div className="flex flex-col w-full">
                         <label htmlFor="" className="font-bold">patient's Name</label>
                         <input type="text" value={patient.firstName} className="w-full p-2 outline-none"/>
                    </div>
                      <div className="flex flex-col w-full">
                         <label htmlFor="" className="font-bold">Date</label>
                         <input type="Date" onChange={(event) => setPatient({...patient, date:event.target.value})} className="w-full p-2 outline-none"/>
                    </div>
                      <div className="flex flex-col w-full">
                         <label htmlFor="" className="font-bold">Time</label>
                         <input type="text" placeholder="24hr format eg 14:00" onChange={(event) => setPatient({...patient, time:event.target.value})} className="w-full p-2 outline-none"/>
                    </div>
                   </div>
                   <button type="submit" className="card rounded-sm py-2 px-6 flex justify-center items-center font-bold cursor-pointer ml-[40%] mt-4 outline-none w-[20%]">{ loading ? <FaSpinner className="animate-spin w-6 h-6 font-bold"/> : "Book appointment"}</button>
                </form>
            </div>
        </div>
    )
}

export default BookAppointment