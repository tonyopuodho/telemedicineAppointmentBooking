import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const Appointment = () => { 
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/appointment')
        .then(result => {
            if (result.data.status) {
                setAppointment(result.data.Result)
            }
        })
        .catch(error => console.log(error))

    },[])
   console.log(appointment)
    return(
          <div className="p-6">
            <div className="p-4 shadow-sm mt-2 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>Doctor's name</th>
                            <th>Patient's name</th>
                            <th>Schedule</th>
                            <th>Time</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                         {
                            appointment ?
                            appointment.map((items,index) => (
                            <tr className="text-center" key={index}>
                                <td className="p-2">{items.dfirstName}</td>
                                <td>{items.firstName}</td>
                                <td>{items.date}</td>
                                <td>{items.time}</td>
                                <td>{items.status}</td>
                            </tr>
                            )) : <tr className="col-span-5 text-center font-bold text-md"> <p>No appoinments made</p></tr>
                         }
                        </tbody>
                    </table>                
            </div>
        </div>
    )
}

export default Appointment