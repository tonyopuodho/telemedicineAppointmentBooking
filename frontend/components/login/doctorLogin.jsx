import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const DoctorLogin = () => {
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)
    const [login, setLogin] = useState([])
    
    const navigate = useNavigate()

    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3000/api/loginDoctor',login)
        .then(result => {
            if (result.data.status) {
                toast.success(result.data.message)
                navigate('/doctorDashboard')
                setLoading(false)
            } else {
                setError(result.data.message)
                setLoading(false)
            }
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/username')
        .then(result => {
            if (result.data.valid) {
                navigate('/doctorDashboard')
            } else {
                navigate('/doctorLogin')
            }
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div className={"backgroundImage"}>
            <div className='flex flex-col justify-center items-center mt-[150px]'>
                <h1 className='font-bold text-2xl mb-2'>login</h1>
                <form className='p-4 bg-white rounded-sm shadow-xl min-w-[20px] w-[40%]' onSubmit={handleSubmit}>
                    <p className='text-sm font-bold text-red-500'>{error && error}</p>
                    <label className='text-xl'>username</label>
                    <input type="text" className='w-full p-2 border rounded-sm outline-none mb-2 mt-1' onChange={(event) => setLogin({...login, username: event.target.value})} name="username" placeholder='Enter username' required />
                    <label className='text-xl'>password</label>
                    <input type="password" className='w-full p-2 border rounded-sm outline-none mb-2 mt-1' onChange={(event) => setLogin({...login, password:event.target.value})} name="password" placeholder='Enter password' required />
                    <button className='btn w-full font-bold cursor-pointer p-3 rounded-md mt-2 flex justify-center'>{loading ? <FaSpinner className='animate-spin h-6 w-6'/> : "Login"}</button>
                </form>
            </div>
        </div>
    )
}

export default DoctorLogin