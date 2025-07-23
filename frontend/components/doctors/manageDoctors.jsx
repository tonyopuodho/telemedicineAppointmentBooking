
const ManageDoctors = () => {
    return(
        <div className="p-6">
            <div className="p-4 shadow-sm mt-2 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>image</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>specialty</th>
                            <th>schedule</th>
                            <th>action</th>
                        </thead>
                        <tbody>
                            <tr className="text-center font-bold ">
                            <td className="p-2">0</td>
                            <td>Tony</td>
                            <td>Ochieng</td>
                            <td>0794498656</td>
                            <td>pediatrics</td>
                            <td>monday</td>
                            <td>0</td>
                            </tr>
                        </tbody>
                    </table>                
            </div>
        </div>
    )
}

export default ManageDoctors