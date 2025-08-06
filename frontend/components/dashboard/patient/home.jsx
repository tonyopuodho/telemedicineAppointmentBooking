import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const PatientHome = () => {
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

    return (
        <div className="p-4 w-full">
            <h2 className="text-center font-extrabold text-xl mt-3 mb-2">Doctors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pl-5">
              {
                doctor.map((item, index) => (
                    <div key={index} className="flex p-4 flex-col shadow-md rounded-sm mt-2">
                        <img src={`http://localhost:3000/images/` + item.image} alt=""/>
                        <div className="pt-2 mb-2">
                            <p><span className="font-bold">Name:</span> {item.dfirstName} {item.dlastName}</p>
                            <p><span className="font-bold">Specialty:</span> {item.specialization}</p>
                            <p><span className="font-bold">Schedule</span> {item.schedule}</p>
                        </div>
                          <Link to={`/patientDashboard/appointment/${item.doctorId}`} className="w-full text-center  p-3 rounded-sm outline-none cursor-pointer card font-bold">Book appointment</Link>
                    </div>
                ))
              }    
            </div>            
        </div>
    )
}

export default PatientHome