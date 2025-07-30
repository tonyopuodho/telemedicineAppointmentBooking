import axios from "axios"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"

const AddDoctor = () => {
    const [doctor,setDoctor] = useState([])
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/api/addDoctor',doctor)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    return (
        <div className="p-8">
            <form className="w-[50%] ml-[25%] rounded-sm shadow-md bg-white p-3" onSubmit={handleSubmit}>
                <label>first name</label>
                <input type="text" required onChange={(event)=> setDoctor({...doctor, firstName:event.target.value})} placeholder="Enter first name" className="w-full bg-white p-1 outline-none rounded-sm mb-2"/>
                <label>last name</label>
                <input type="text" required onChange={(event)=> setDoctor({...doctor, lastName:event.target.value})}  placeholder="Enter last name" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>email</label>
                <input type="email" required onChange={(event)=> setDoctor({...doctor, email:event.target.value})}  placeholder="Enter email eg. johndoe@gmail.com" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>phone</label>
                <input type="phone" required onChange={(event)=> setDoctor({...doctor, phone:event.target.value})}  placeholder="Enter phone number" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>specialization</label>
                <input type="text" required onChange={(event)=> setDoctor({...doctor, specialization:event.target.value})}  placeholder="Specialization eg pediatrics" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>schedule</label>
                <input type="text" onChange={(event)=> setDoctor({...doctor, schedule:event.target.value})}  placeholder="Schedule eg Monday" required className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>image</label>
                <input type="file" onChange={(event)=> setDoctor({...doctor, image:event.target.files[0].name})}  className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <label>password</label>
                <input type="password" required onChange={(event)=> setDoctor({...doctor, password:event.target.value})}  placeholder="Enter password" className="w-full bg-white p-1 outline-none mb-2 rounded-sm"/>
                <button className="w-full card p-2 rounded-sm mt-2 font-bold cursor-pointer flex justify-center">{ loading ? <FaSpinner className="animate-spin font-bold h-6 w-6 "/> : "Add doctor"}</button>
            </form>
        </div>
    )
}

export default AddDoctor