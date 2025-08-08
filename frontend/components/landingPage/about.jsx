

const AboutPage = () => {
    return (
        <div className="w-full p-4 h-[100vh] cardAp" id="about">
            <h2 className="text-center pt-2 text-4xl font-bold">About us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2">
                <div className="bg-white p-4 rounded-sm shadow-md">
                    <h3 className="text-center font-bold text-md">Schedule</h3>
                    <table className="w-full">
                        <tbody className="font-bold">
                            <tr>
                                <td>Monday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                              <tr>
                                <td>Tuesday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                              <tr>
                                <td>Wednesday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                              <tr>
                                <td>Thursday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                              <tr>
                                <td>Friday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                              <tr>
                                <td>Saturday</td>
                                <td className="text-right">8:00 Am - 17:00 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div className="bg-white p-4 rounded-sm shadow-md">
                    <h2 className="font-bold text-center">Services</h2>
                    <div className="flex justify-between p-2">
                    <ul className="list-disc">
                        <li>Pediatrics</li>
                        <li>Surgery</li>
                        <li>Chemotherapy</li>
                        <li>MRI scan</li>
                        <li>Xrays</li>
                        <li>Gynacology</li>
                    </ul>
                       <ul className="list-disc">
                        <li>Internal medicine</li>
                        <li>Dialisys</li>
                        <li>Nursing</li>
                        <li>Emergency medicine</li>
                        <li>Dermatology</li>
                        <li>Dentistry</li>
                    </ul>
                    </div>
                 
                 </div>
                  <div className="bg-white p-4 rounded-sm shadow-md">
                    <h2 className="font-bold text-center">Family medicine</h2>
                    <div className="p-4">
                        <p>Our team of experienced physicians provides comprehensive medical care for individuals and families.</p>
                    </div>
                  </div>
            </div>
            <div className="flex gap-12">
                <img src="/pexels-arthur-uzoagba-3061628-33288891.jpg" alt="" className="w-[40%] h-[60vh] mt-2 rounded-sm ml-10"/>
                <div className="w-[50%] mt-[10%] text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit suscipit doloribus exercitationem repellat nostrum explicabo sunt eveniet soluta deserunt, quasi amet delectus magnam praesentium ad placeat similique nesciunt fugit modi voluptate dolores quidem id,
                     quam commodi. Velit, suscipit quos officia beatae tempore, ipsam ab doloribus nemo, vel fugiat mollitia aliquid?
                </div>
            </div>
        </div>
    )
}

export default AboutPage