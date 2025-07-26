import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const FeedBack = () => {
    const [feedback,setFeedback] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/action/feedback')
        .then(result => {
            if (result.data.status) {
                setFeedback(result.data.Result)
            } else {
                console.log("an error occured")
            }
        })
        .catch(error => console.log(error))
    },[])
    return (
        <div className="p-4">
            <div className="p-6 w-full cardAp mt-4 rounded-sm shadow-md">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>first name</th>
                            <th>last name</th>                           
                            <th>email</th>
                            <th className="w-[30%]">feedback</th>
                        </thead>
                        <tbody>
                            {
                                feedback.map((items,index) => (
                                     <tr className="text-center font-bold border" key={index}>
                                        <td className="p-2">{items.firstName}</td>
                                        <td>{items.lastName}</td>
                                        <td>{items.email}</td>
                                        <td>{items.feedback}</td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                    </table>                  
            </div>
        </div>
    )
}

export default FeedBack