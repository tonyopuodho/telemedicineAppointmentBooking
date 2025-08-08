
const Doctors = () => {
    return(
        <div className="p-4">
            <div className="h-[80vh]" id="doctor">
                <h2 className="font-bold text-xl text-center mt-4">Meet our professionals</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                    <div className="p-4 rounded-sm shadow-md border border-blue-600 flex flex-col">
                        <img src="/team-skip-01.jpg" alt="" />
                        <div className="mt-2">
                            <h3 className="font-bold">Dr John Henry</h3>
                            <p>Neurosurgeon</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-sm shadow-md border border-blue-600 flex flex-col">
                        <img src="/team-skip-02.jpg" alt="" />
                        <div className="mt-2">
                            <h3 className="font-bold">Dr Niranjan Pichai</h3>
                            <p>Cardiologist</p>
                        </div>                        
                    </div>
                    <div className="p-4 rounded-sm shadow-md border border-blue-600 flex flex-col">
                        <img src="/team-skip-03.jpg" alt="" />
                           <div className="mt-2">
                            <h3 className="font-bold">Dr Magret Neliama</h3>
                            <p>Pediatrics</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-sm shadow-md border border-blue-600 flex flex-col">
                        <img src="/team-skip-04.jpg" alt="" />
                           <div className="mt-2">
                            <h3 className="font-bold">Dr Antone Thor</h3>
                            <p>Orthopaedic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors