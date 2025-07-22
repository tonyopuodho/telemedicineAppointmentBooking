import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import '/src/index.css'
import axios from 'axios'
const LoginPage = () => {
    const [login, setLogin] = useState([])
    const [loading,setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3000/auth/login',login)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    return (
        <div className={"backgroundImage"}>
            <div className='flex flex-col justify-center items-center mt-[150px]'>
                <h1 className='font-bold text-2xl mb-2'>login</h1>
                <form className='p-4 bg-white rounded-sm shadow-xl min-w-[20px] w-[40%]' onSubmit={handleSubmit}>
                    <label className='text-xl'>username</label>
                    <input type="text" className='w-full p-2 border rounded-sm outline-none mb-2 mt-1' onChange={(event) => setLogin({...login, username: event.target.value})} name="username" placeholder='Enter username' required />
                    <label className='text-xl'>password</label>
                    <input type="password" className='w-full p-2 border rounded-sm outline-none mb-2 mt-1' onChange={(event) => setLogin({...login, password:event.target.value})} name="password" placeholder='Enter password' required />
                    <label className='text-xl'>role</label>
                    <select name="role" id="" className='w-full border p-3 rounded-sm outline-none mb-2 select outline-none' onChange={(event) => setLogin({...login, role:event.target.value})}>
                        <option value="admin">admin</option>
                        <option value="doctor">doctor</option>
                        <option value="patient">patient</option>
                    </select>
                    <button className='btn w-full font-bold cursor-pointer p-3 rounded-md mt-2 flex justify-center'>{loading ? <FaSpinner className='animate-spin h-6 w-6'/> : "Login"}</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage