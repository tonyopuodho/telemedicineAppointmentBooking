import axios from "axios"
import { useEffect, useState } from "react"
import { data, Link } from "react-router-dom"
import { toast } from "react-toastify"

const ManageDoctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/doctors')
        .then(result => {
            if (result.data.status) {
                setDoctor(result.data.Result)
            }
        })
        .catch(error => console.log(error))
    },[])
    
    const deleteDoctor = (id) => {
        axios.delete(`http://localhost:3000/api/doctor/${id}`)
        .then(result => {
            console.log(result)
            if (result.data.status) {
                toast.success(result.data.message)
                window.location.reload()
            } else {
                toast.error("An error occured")
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <div className="p-6">
            <Link to={"/dashboard/manageDoctors/addDoctor"} className="py-3 px-5 rounded-sm card mt-3 pb-4 cursor-pointer font-bold outline-none shadow-md">Add doctor</Link>
            <div className="p-4 shadow-sm mt-8 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th className="">image</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>specialty</th>
                            <th>schedule</th>
                            <th>action</th>
                        </thead>
                        <tbody>
                            {
                                doctor.map((items,index) => (
                                <tr className="text-center font-bold" key={index}>
                                    <td className="p-2 w-[15%]"> 
                                        <img src={`http://localhost:3000/images/` + items.image} alt=""  className=" h-30 w-30"/>
                                    </td>
                                    <td>{items.firstName}</td>
                                    <td>{items.lastName}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.specialization}</td>
                                    <td>{items.schedule}</td>
                                    <td>
                                        <Link to={`/dashboard/manageDoctors/${items.doctorId}`} className="p-3 card rounded-sm cursor-pointer outline-none">Edit</Link>
                                        <button className="p-2 card ml-4 rounded-sm cursor-pointer outline-none" onClick={() => deleteDoctor(items.doctorId)} >Delete</button>
                                    </td>
                                </tr>  
                                ))
                            }
                          
                        </tbody>
                    </table>   
                           
            </div>  
        </div>
    )
}

export default ManageDoctors