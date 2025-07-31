import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [countDoctor,setCountDoctor] = useState(0)
    const [countPatient,setCountPatient] = useState(0)
    const [countFeedBack,setCountFeedback] = useState(0)
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
                                <td className="p-2">0</td>
                                <td>0</td>
                                <td>0</td>
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
                            <td className="p-2">0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
               </div>          
        </div>
    )
}

export default Home