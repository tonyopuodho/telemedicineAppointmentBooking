import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [countDoctor,setCountDoctor] = useState(0)
    const [countPatient,setCountPatient] = useState(0)
    const [countFeedBack,setCountFeedback] = useState(0)
    const [pending,setPending] = useState(0)
    const [doctors, setDoctor] = useState(0)
    const [sunday, setSunday] = useState(0)
    const [monday, setMonday] = useState(0)
    const [tuesday, setTuesday] = useState(0)
    const [wednesday,setWednesday] = useState(0)
    const [thursday,setThursday] = useState(0)
    const [friday,setFriday] = useState(0)
    const [saturday,setSaturday] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:3000/api/countDoctor')
        .then(result => {
            if (result.data.status) {
                setCountDoctor(result.data.Result[0].total)
            }
        })
        .catch(error => console.log(error))

        axios.get('http://localhost:3000/action/countFeedback')
        .then(result => {
            if(result.data.status) {
                setCountFeedback(result.data.Result[0].total)
            }
        })
        .catch(error => console.log(error))

         axios.get('http://localhost:3000/auth/countPatient')
        .then(result => {
            if(result.data.status) {
                setCountPatient(result.data.Result[0].total)
            }
        })
        .catch(error => console.log(error))
        
        axios.get('http://localhost:3000/api/countPending')
        .then(result => {
            if (result.data.status) {
                setPending(result.data.Result[0])
            }
        })
        .catch((error) => console.log(error))

        axios.get("http://localhost:3000/api/countDoctorAppoinment")
        .then((result) => {
            if (result.data.status) {
                setDoctor(result.data.Result[0])
            }})
        .catch((error) => console.log(error)) 
        
         axios.get('http://localhost:3000/api/countSun')
        .then(result => {
            if (result.data.status) {
                setSunday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countMon')
        .then(result => {
            if (result.data.status) {
                setMonday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countTue')
        .then(result => {
            if (result.data.status) {
                setTuesday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countWed')
        .then(result => {
            if (result.data.status) {
                setWednesday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countThur')
        .then(result => {
            if (result.data.status) {
                setThursday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countFri')
        .then(result => {
            if (result.data.status) {
                setFriday(result.data.Result[0].day)
            }
        })
        axios.get('http://localhost:3000/api/countSat')
        .then(result => {
            if (result.data.status) {
                setSaturday(result.data.Result[0].day)
            }
        })
    },[])
    return (
        <div className="p-6">
             <div className="p-6 grid md:grid-cols-3 gap-12 grid-cols-1">
                <div className="p-4 rounded-sm shadow-md card">
                    <h3 className="text-center font-bold text-xl mb-2">Doctors</h3>
                    <hr />
                    <div className="flex gap-65 mt-2 font-extrabold">
                        <h3>Total</h3> <span>{countDoctor}</span>
                    </div>
                </div>
                <div className="p-4 rounded-sm shadow-md card">
                    <h3 className="text-center font-bold text-xl mb-2">Patients</h3>
                    <hr />
                    <div className="flex gap-65 mt-2 font-extrabold">
                        <h3>Total</h3> <span>{countPatient}</span>
                    </div>
                </div>
                   <div className="p-4 rounded-sm shadow-md card">
                    <h3 className="text-center font-bold text-xl mb-2">Feedback</h3>
                    <hr />
                    <div className="flex gap-65 mt-2 font-extrabold">
                        <h3>Total</h3> <span>{countFeedBack}</span>
                    </div>
                </div>              
             </div>
             <div className="p-6 flex flex-col">
                <div className="p-6 cardAp w-full shadow-md rounded-sm mt-4">
                    <table className="w-full">
                        <thead className="text-center">
                            <th className="w-[20%]">Appointments</th>
                            <th className="w-[20%]">Doctors</th>
                            <th className="w-[20%]">Patients</th>
                        </thead>
                        <tbody>
                            <tr className="text-center font-bold">
                                <td className="p-2">{pending.pending}</td>
                                <td>{doctors.doctor}</td>
                                <td>{pending.pending}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
                <div className="p-6 cardAp w-full shadow-md rounded-sm mt-18">
                    <h2 className="font-bold text-center mb-4 text-xl">Doctors schedule</h2>
                    <table className="w-full">
                        <thead className="text-center">
                            <th>sun</th>
                            <th>mon</th>
                            <th>tue</th>
                            <th>wed</th>
                            <th>thur</th>
                            <th>fri</th>
                            <th>sat</th>
                        </thead>
                        <tbody>
                            <tr className="text-center font-bold">
                            <td className="p-2">{sunday}</td>
                            <td>{monday}</td>
                            <td>{tuesday}</td>
                            <td>{wednesday}</td>
                            <td>{thursday}</td>
                            <td>{friday}</td>
                            <td>{saturday}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
               </div>          
        </div>
    )
}

export default Home