import axios from "axios"
import { useEffect, useState } from "react"

const PatientAppointment = () => {
    const [patientAppointment,setPatientAppointment] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/auth/patientName")
        .then(result => {
            if (result.data.valid) {
                const patientId = result.data.patientId
                axios.get(`http://localhost:3000/api/patientAppointment/${patientId}`)
                .then(result => {
                    if(result.data.status) {
                        setPatientAppointment(result.data.Result)                    
                    }
                })
                .catch(error => console.log(error))                
            }
         })
        .catch(error => console.log(error))
    },[])

    return (
        <div className="p-4">
            <div className="p-4 cardAp rounded-sm shadow-md mt-5 h-[80vh] overflow-auto">
                <table className="w-full">
                    <thead>
                        <th className="w-[20%]">Doctor's Name</th>
                        <th className="w-[20%]">Patient's Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </thead>
                    <tbody className="text-center ">
                        {
                            patientAppointment.map((items,index) => (
                                <tr key={index}>
                                    <td>{items.dfirstName}</td>
                                    <td>{items.firstName}</td>
                                    <td>{items.date}</td>
                                    <td>{items.time}</td>
                                    <td>{items.status}</td>
                                </tr>
                            ))
                        }                              
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientAppointment