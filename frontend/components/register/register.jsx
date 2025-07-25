import axios from "axios"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Register = () => {
    const [register, setRegister] = useState([])
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()

        setLoading(true)

        axios.post('http://localhost:3000/auth/register',register)
        .then(result => {
            if (result.data.status) {
                setLoading(false)
                toast.success(result.data.message)
                navigate('/patientportal')
            } else{
                setLoading(false)
                toast.error(result.data.message)
            }
        })
        .catch(error => console.log(error))
    } 

    return (
        <div className="backgroundImage flex flex-col items-center">
            <div className="w-[40%]">
                <h1 className="font-extrabold text-2xl mt-4 text-center">Register an account</h1>
                <form className="p-4 bg-white shadow-md mt-2 rounded-sm" onSubmit={handleSubmit}>
                    <label>first name</label>
                    <input type="text" required onChange={(event) => setRegister({...register, firstName: event.target.value})} placeholder="Enter first name" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>last name</label>
                    <input type="text" required onChange={(event) => setRegister({...register, lastName:event.target.value})} placeholder="Enter last name" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>email</label>
                    <input type="email" required onChange={(event) => setRegister({...register, email:event.target.value})} placeholder="Enter email" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>phone</label>
                    <input type="phone" required onChange={(event) => setRegister({...register, phone: event.target.value})} placeholder="Enter phone number" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>date of birth</label>
                    <input type="date" required onChange={(event) => setRegister({...register, dateOfbirth:event.target.value})} className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>gendar</label>
                    <select name="gendar" id="" onChange={(event) => setRegister({...register, gendar:event.target.value})} className="outline-none border p-2 rounded-sm w-full mb-2 mt-1 select">
                        <option value="">select gendar</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>address</label>
                    <input type="text" required onChange={(event) => setRegister({...register, address:event.target.value})} placeholder="Enter address" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <label>password</label>
                    <input type="password" required onChange={(event) => setRegister({...register, password:event.target.value})} placeholder="Enter password" className="outline-none border p-1 rounded-sm w-full mb-2 mt-1"/>
                    <button className="w-full cursor-pointer font-bold rounded-sm btn p-2 mt-2 outline-none flex justify-center">{loading ? <FaSpinner className="w-6 h-6 animate-spin"/>: "Register"}</button>
                    <p className="text-sm pt-2">Already have an account? <Link to={'/login'} className="text-md font-bold">click to login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register