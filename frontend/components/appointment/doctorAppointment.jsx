import axios from "axios"
import { useEffect, useState } from "react"

const DoctorAppointment = () => {
  const [appointment, setAppointment] = useState([])

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
                    <tbody className="text-center font-bold">
                       {
                         appointment.map((item,index) => (
                            <tr key={index}>
                              <td>{item.dfirstName}</td>
                              <td>{item.firstName}</td>
                              <td>{item.date}</td>
                              <td>{item.time}</td>
                              <td>{item.status}</td>
                              <td><button>complete</button> <button>cancel</button></td>
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
                    <tbody className="text-center font-bold">
                        <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                            <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                            <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                               <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                               <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                               <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                               <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                               <tr>
                            <td>Tony</td>
                            <td>Roseline</td>
                            <td>2/3/2023</td>
                            <td>8:00</td>
                            <td>completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorAppointment