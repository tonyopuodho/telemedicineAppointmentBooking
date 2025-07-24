import { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import '/src/index.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const LoginPage = () => {
    const [login, setLogin] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    const navigate = useNavigate()

    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post("http://localhost:3000/auth/login",login)
        .then(result => {
            if (result.data.status) {
                setLoading(false)
                navigate('/dashboard')
                toast.success(result.data.message)
            } else{
                setError(result.data.message)
                setLoading(false)
            }
        })
        .catch(error => console.log(error))
    }
        useEffect(() => {
            axios.get('http://localhost:3000/auth/username')
            .then(result => {
                if(result.data.valid) {
                    navigate('/dashboard')
                } else {
                    navigate('/login')
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
                    <label className='text-xl'>role</label>
                    <select name="role" id="" className='w-full border p-3 rounded-sm outline-none mb-2 select' onChange={(event) => setLogin({...login, role:event.target.value})}>
                        <option value="select role">select role</option>
                        <option value="admin">admin</option>
                        <option value="doctor">doctor</option>
                        <option value="patient">patient</option>
                    </select>
                    <button className='btn w-full font-bold cursor-pointer p-3 rounded-md mt-2 flex justify-center'>{loading ? <FaSpinner className='animate-spin h-6 w-6'/> : "Login"}</button>
                    <p className="text-sm pt-2">Don't have an account? <Link to={'/register'} className="text-md font-bold">click to register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage