
const PatientProfile = () => {
    return(
        <div className="p-4">
            <div className="cardAp p-4 mt-6 rounded-md shadow-md">
                <form className="p-3 w-full ">
                  <div className="flex gap-8">
                        <div>
                        <label className="font-bold">First name</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">Email</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Address</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                       
                    </div>
                    <div>
                        <label className="font-bold">Last name</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>
                        <label className="font-bold">phone</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/> 
                         <label className="font-bold">Date of birth</label>
                        <input type="text" className="w-full p-2 outline-none rounded-md mb-2 bg-white"/>                          
                    </div>
                  </div>
                  <button type="submit" className="card w-[20%] p-2 mt-3 ml-[40%] rounded-sm shadow-md font-bold cursor-pointer">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default PatientProfile