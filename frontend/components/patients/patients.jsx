import axios from "axios"
import { useEffect, useState } from "react"


const Patients = () => {
    const [patient,setPatient] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/auth/patient")
        .then(result => {
            if(result.data.status) {
                setPatient(result.data.Result)
            } else{
                console.log("Error occured")
            }
        })
        .then(error => console.log(error))
    },[])
    return(
           <div className="p-6">
            <div className="p-4 shadow-sm mt-2 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>first name</th>
                            <th>last name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>gender</th>
                            <th>address</th>
                        </thead>
                        <tbody>
                        {
                            patient.map((item,index) => (
                                  <tr className="text-center font-bold " key={index}>
                                    <td className="p-2">{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gendar}</td>
                                    <td>{item.address}</td>
                             </tr>
                            ))
                        }                         
                                         
                        </tbody>
                    </table>                
            </div>
        </div>
    )
}

export default Patients