import axios from "axios"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddDoctor = () => {
    const navigate = useNavigate()
    const [doctor,setDoctor] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        specialization:'',
        schedule:'',
        image:'',
        password:''
    })
    const [loading,setLoading] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('firstName',doctor.firstName)
        formData.append('lastName',doctor.lastName)
        formData.append('email',doctor.email)
        formData.append('phone',doctor.phone)
        formData.append('specialization',doctor.specialization)
        formData.append('schedule',doctor.schedule)
        formData.append('image',doctor.image)
        formData.append('password',doctor.password)

        console.log(formData) 
        setLoading(true)
        axios.post('http://localhost:3000/api/addDoctor',formData)
        .then(result => {
            if (result.data.status) {
                setLoading(false)
                toast.success(result.data.message)
                navigate('/dashboard/manageDoctors')
            } else{
                setLoading(false)
                toast.error(result.data.message)
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="p-8">
            <form className="w-[50%] ml-[25%] rounded-sm shadow-md bg-white p-3" onSubmit={handleSubmit}>
                <label>first name</label>
                <input type="text" name="firstname" required onChange={(event)=> setDoctor({...doctor, firstName:event.target.value})} placeholder="Enter first name" className="w-full bg-white p-1 outline-none rounded-sm mb-2"/>
                <label>last name</label>
                <input type="text" name="lastname" required onChange={(event)=> setDoctor({...doctor, lastName:event.target.value})}  placeholder="Enter last name" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>email</label>
                <input type="email" name="email" required onChange={(event)=> setDoctor({...doctor, email:event.target.value})}  placeholder="Enter email eg. johndoe@gmail.com" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>phone</label>
                <input type="phone" name="phone" required onChange={(event)=> setDoctor({...doctor, phone:event.target.value})}  placeholder="Enter phone number" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>specialization</label>
                <input type="text" name="specialization" required onChange={(event)=> setDoctor({...doctor, specialization:event.target.value})}  placeholder="Specialization eg pediatrics" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>schedule</label>
                <input type="text" name="schedule" onChange={(event)=> setDoctor({...doctor, schedule:event.target.value})}  placeholder="Schedule eg Monday" required className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>image</label>
                <input type="file" name="image" onChange={(event)=> setDoctor({...doctor, image:event.target.files[0]})}  className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>password</label>
                <input type="password" name="password" required onChange={(event)=> setDoctor({...doctor, password:event.target.value})}  placeholder="Enter password" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <button className="w-full card p-2 rounded-sm mt-2 font-bold cursor-pointer flex justify-center">{ loading ? <FaSpinner className="animate-spin font-bold h-6 w-6 "/> : "Add doctor"}</button>
            </form>
        </div>
    )
}

export default AddDoctor