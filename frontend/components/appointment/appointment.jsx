
const Appointment = () => { 
    return(
          <div className="p-6">
            <div className="p-4 shadow-sm mt-2 cardAp rounded-sm">
                    <table className="w-full">
                        <thead className="text-center">
                            <th>Doctor's name</th>
                            <th>Patient's name</th>
                            <th>Schedule</th>
                            <th>Time</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <tr className="text-center font-bold ">
                            <td className="p-2">Tony</td>
                            <td>Roseline</td>
                            <td>12/8/2025</td>
                            <td>9:00</td>
                            <td>pending</td>
                            </tr>
                        </tbody>
                    </table>                
            </div>
        </div>
    )
}

export default Appointment