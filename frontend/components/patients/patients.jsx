

const Patients = () => {
    return(
           <div className="p-6">
            <div className="p-4 shadow-sm mt-2 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>first name</th>
                            <th>last name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>gender</th>
                            <th>address</th>
                        </thead>
                        <tbody>
                            <tr className="text-center font-bold ">
                            <td className="p-2">Tony</td>
                            <td>Ochieng</td>
                            <td>ochieng@gmail.com</td>
                            <td>0794498656</td>
                            <td>Male</td>
                            <td>nairobi</td>
                            </tr>
                             <tr className="text-center font-bold ">
                            <td className="p-2">Tony</td>
                            <td>Ochieng</td>
                            <td>ochieng@gmail.com</td>
                            <td>0794498656</td>
                            <td>Male</td>
                            <td>nairobi</td>
                            </tr>
                                         
                        </tbody>
                    </table>                
            </div>
        </div>
    )
}

export default Patients