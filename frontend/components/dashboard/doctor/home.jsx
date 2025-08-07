import axios from "axios"
import { useEffect, useState } from "react"


const DoctorHome = () => {
    const [day, setDay] = useState([])
    const [cancel,setCancel] = useState(0)
    const [complete, setComplete] = useState(0)
    const [pending, setPending] = useState(0)

    useEffect(() => {

        axios.get('http://localhost:3000/api/countCancel')
        .then(result => {
            if (result.data.status) {
                setCancel(result.data.Result[0])
            }
        })
        .catch((error) => console.log(error))

        axios.get('http://localhost:3000/api/countComplete')
        .then(result => {
            if (result.data.status) {
                setComplete(result.data.Result[0])
            }
        })
        .catch((error) => console.log(error))
        axios.get('http://localhost:3000/api/countPending')
        .then(result => {
            if (result.data.status) {
                setPending(result.data.Result[0])
            }
        })
        .catch((error) => console.log(error))
    },[])

    useEffect(() => {
        axios.get('http://localhost:3000/api/username')
        .then(result =>{
            if (result.data.valid) {
                const doctorId = result.data.doctorId
                axios.get(`http://localhost:3000/api/doctor/${doctorId}`)
                .then(result => {
                    if (result.data.status) {
                           setDay({
                            id:doctorId,                           
                            schedule:result.data.Result[0].schedule,                           
                        })
                    }
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <div className="p-4 flex flex-col">
            <h2 className="text-center font-bold text-2xl">Stats</h2>
            <div className="card shadow-md mt-5 rounded-md p-4">
                <table className="w-full mt-5 mb-5">
                    <thead>
                        <th className="w-[26%]">Appointments</th>
                        <th>Patients</th>
                        <th>Day</th>
                    </thead>
                    <tbody>
                        <tr className="text-center font-bold text-xl">
                            <td>{pending.pending}</td>
                            <td>{pending.pending}</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>     
               <h2 className="text-center font-bold text-2xl mt-5">Status</h2>
            <div className="card shadow-md mt-5 rounded-md p-4">
                <table className="w-full mt-5 mb-5">
                    <thead>
                        <th className="w-[25%] ">Pending</th>
                        <th className="w-[49%]">Completed</th>
                        <th className="w-[40%]">Canceled</th>
                    </thead>
                    <tbody>
                        <tr className="text-center font-bold text-xl">
                            <td>{pending.pending}</td>
                            <td>{complete.complete}</td>
                            <td>{cancel.cancel}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
               <h2 className="text-center font-bold text-2xl mt-5">Schedule</h2>
            <div className="card shadow-md mt-5 rounded-md p-12 flex justify-between">
                <h2 className="text-xl font-bold ml-10">Assigned day</h2> 
                <h2 className="text-xl font-bold mr-15">{day.schedule}</h2>           
            </div>    
        </div>
    )
}

export default DoctorHome