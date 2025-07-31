import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'

const EditDoctor = () => {
    const [doctor, setDoctor] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/doctor/${id}`)
        .then(result => {
            if (result.data.status) {
                setDoctor(result.data.Result[0])
            }
        })
        .catch(error => console.log(error))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/api/doctor/${id}`, doctor)
        .then(result => {
            if (result.data.status) {
                toast.success(result.data.message)
                navigate('/dashboard/manageDoctors')            
            }
        })
        .catch(error => console.log(error))
    }
   
    return (
        <div className="p-8">
            <div className="w-[50%] p-4 ml-[20%] shadow-md flex items-center justify-center flex-col text-left">
                <img src={`http://localhost:3000/images/` + doctor.image} className="shadow-md" alt="" />
              <div>
                <h2 className="font-bold mr-[25%] mt-5">Name  <span className="font-light ml-3">{doctor.firstName} {doctor.lastName}</span></h2>
                <h2 className="font-bold mr-[25%]">Specialty  <span className="font-light ml-3">{doctor.specialization}</span></h2>
                <form onSubmit={handleSubmit}>
                    <label className="font-bold">Schedule</label>
                    <input type="text" value={doctor.schedule} className="outline-none w-full rounded-sm p-1" onChange={(event) => setDoctor({...doctor, schedule:event.target.value})}/>
                    <button type="submit" className="card w-full mt-4 p-1 shadow-md cursor-pointer rounded-sm font-bold">Edit</button>
                </form>
              </div>
            </div>
        </div>
    )
}

export default EditDoctor