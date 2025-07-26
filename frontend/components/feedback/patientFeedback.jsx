import axios from "axios"
import { useState } from "react"
import { toast } from 'react-toastify'

const PatientFeedback = () => {
    const [feedback,setFeedback] = useState([])
    const [message,setMessage] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/action/feedback',feedback)
        .then(result => {
            if(result.data.status) {
                toast.success(result.data.message)
            } else {
                toast.error(result.data.message)
            }
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="p-4 w-full flex flex-col">
            <h3 className="font-bold text-center mb-3">we would like to hear from you</h3>
            <div className="p-4 cardAp rounded-sm shadow-md h-[75vh]">
                <form onSubmit={handleSubmit} className="w-80% flex flex-col h-full">
                    <label className="text-md font-bold">First name</label>
                    <input type="text" onChange={(event) => setFeedback({...feedback, firstName:event.target.value})} className="p-2 outline-none bg-white mb-3 w-[50%] rounded-sm" required placeholder="Enter firstname"/>
                    <label className="text-md font-bold">Last name</label>
                    <input type="text"  onChange={(event) => setFeedback({...feedback, lastName: event.target.value})} className="mb-3 bg-white p-2 outline-none w-[50%] rounded-sm" placeholder="Enter lastname" required/>
                    <label  className="text-md font-bold">Email</label>
                    <input type="email" onChange={(event) => setFeedback({...feedback, email:event.target.value})} className="w-[50%] bg-white mb-3 p-2 outline-none rounded-sm" placeholder="Enter email" required/>
                    <textarea name="" id="" onChange={(event)=> setFeedback({...feedback, feedback:event.target.value})} className="outline-none bg-white p-2 rounded-sm mt-3 w-full h-[40%]" placeholder="Enter text..."></textarea>
                    <button type="submit" className="outline-none mt-4 card p-3 w-[35%] rounded-sm cursor-pointer ml-[30%] font-bold ">Send feedback</button>
                </form>
            </div>            
        </div>
    )
}

export default PatientFeedback