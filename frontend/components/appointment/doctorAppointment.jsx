import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'

const DoctorAppointment = () => {
  const [appointment, setAppointment] = useState([])
  const[pastAppointment, setPastAppointment] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/username')
    .then(result => {
      if (result.data.valid) {
        const doctorid = result.data.doctorId
        axios.get(`http://localhost:3000/api/doctorAppointment/${doctorid}`)
        .then((result) => {
          if (result.data.status) {
            setAppointment(result.data.Result)
          }
        })
        .catch((error) => console.log(error))
      }
    })
    .catch((error) => console.log(error))
  },[])

  useEffect(() => {
    axios.get('http://localhost:3000/api/username')
     .then(result => {
      if (result.data.valid) {
        const doctorid = result.data.doctorId
        axios.get(`http://localhost:3000/api/doctorsAppointment/${doctorid}`)
        .then((result) => {
          if (result.data.status) {
            setPastAppointment(result.data.Result)
          }
        })
        .catch((error) => console.log(error))
      }
    })
    .catch((error) => console.log(error))
  },[])
  
  const handlecomplete = (id) => {
    axios.put(`http://localhost:3000/api/completeAppointment/${id}`)
    .then((result) => {
      if (result.data.status) {
        toast.success(result.data.message)
        window.location.reload()
      } else {
        toast.error("An error occured")
      }
    })
    .catch((error) => console.log(error))    
  }

  const handleCancel = (id) => {
  axios.put(`http://localhost:3000/api/cancelAppointment/${id}`)
  .then((result) => {
    if (result.data.status) {
      toast.error(result.data.message)
       window.location.reload()
    } else {
      toast.error("An error occured")
    }
  })
  .catch((error) => console.log(error))    
}

    return (
        <div className="p-4 flex flex-col">
            <h2 className="text-center font-bold text-xl">Current Appointments</h2>
            <div className="p-4 cardAp shadow-md rounded-md mt-2 overflow-auto h-[40vh] ">
                <table className="w-full">
                    <thead>
                        <th className="w-[20%]">Doctor's Name</th>
                        <th className="w-[20%]">Patient's Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody className="text-center">
                       {
                         appointment.map((item,index) => (
                            <tr key={index} className="">
                              <td className="p-2">{item.dfirstName}</td>
                              <td>{item.firstName}</td>
                              <td>{item.date}</td>
                              <td>{item.time}</td>
                              <td>{item.status}</td>
                              <td className="w-[20%]"><button onClick={() => handlecomplete(item.time)} className="cursor-pointer card p-1 rounded-sm outline-none">complete</button> <button onClick={() => handleCancel(item.time)} className="cursor-pointer outline-none bg-red-400 p-1 rounded-sm">cancel</button></td>
                          </tr>
                         ))
                       }
                    </tbody>
                </table>
            </div>
            <h2 className="text-center font-bold text-xl mt-6">Past Appointments</h2>
            <div className="p-4 cardAp shadow-md rounded-md mt-4 overflow-auto h-[30vh]">
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
                        pastAppointment.map((item,index) => (
                          <tr key={index}>
                              <td>{item.dfirstName}</td>
                              <td>{item.firstName}</td>
                              <td>{item.date}</td>
                              <td>{item.time}</td>
                              <td>{item.status}</td>
                          </tr> 
                        ))
                      }                  
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorAppointment