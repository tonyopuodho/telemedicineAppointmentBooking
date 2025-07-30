

const DoctorHome = () => {
    return(
        <div className="p-4 flex flex-col">
            <h2 className="text-center font-bold text-2xl">Stats</h2>
            <div className="card shadow-md mt-5 rounded-md p-4">
                <table className="w-full mt-5 mb-5">
                    <thead>
                        <th className="w-[26%]">Appointments</th>
                        <th>Patients</th>
                        <th>Days</th>
                    </thead>
                    <tbody>
                        <tr className="text-center font-bold text-xl">
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>     
               <h2 className="text-center font-bold text-2xl mt-5">Status</h2>
            <div className="card shadow-md mt-5 rounded-md p-4">
                <table className="w-full mt-5 mb-5">
                    <thead>
                        <th className="w-[25%] ">Schedule</th>
                        <th className="w-[49%]">Completed</th>
                        <th className="w-[40%]">Canceled</th>
                    </thead>
                    <tbody>
                        <tr className="text-center font-bold text-xl">
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
               <h2 className="text-center font-bold text-2xl mt-5">Schedule</h2>
            <div className="card shadow-md mt-5 rounded-md p-12 flex justify-between">
                <h2 className="text-xl font-bold ml-10">Assigned day</h2> 
                <h2 className="text-xl font-bold mr-15">Monday</h2>           
            </div>    
        </div>
    )
}

export default DoctorHome