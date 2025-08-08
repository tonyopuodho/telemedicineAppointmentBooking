import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="p-4 nav h-[30vh]">
            <div className="p-4 grid grid-cols-1 lg:grid-cols-4 w-[80%] mx-auto">
                <div className="flex flex-col p-2">
                    <h2 className="font-bold text-xl">Portals</h2>
                    <ul className="mt-4 text-sm list-disc">
                        <li><Link to={"/login"}>Admin portal</Link></li>
                        <li><Link to={"/patientportal"}>Patient portal</Link></li>
                        <li><Link to={"/doctorLogin"}>Doctor portal</Link></li>
                    </ul>
                </div>
                   <div className="flex flex-col p-2">
                    <h2 className="font-bold text-xl">Services</h2>
                    <ul className="mt-4 text-sm list-disc">
                        <li>Family planning</li>
                        <li>Family medicine</li>
                        <li>Consaltation</li>
                    </ul>
                </div>
                   <div className="flex flex-col p-2">
                    <h2 className="font-bold text-xl">Quick links</h2>
                    <ul className="mt-4 text-sm list-disc">
                        <li className="flex gap-2 items-center"><FaFacebook/> Facebook</li>
                        <li className="flex gap-2 items-center"><FaTwitter/> Twitter</li>
                        <li className="flex gap-2 items-center"><FaInstagram/> Instagram</li>
                    </ul>
                </div>
                 <div className="flex flex-col p-2">
                    <h2 className="font-bold text-xl">Contacts</h2>
                    <ul className="mt-4 text-sm list-disc">
                        <li>medicalview@gmail.com</li>
                        <li>+254 794 498 656</li>
                        <li>+542 168 185 954</li>
                    </ul>
                </div>                
            </div>
            <hr  className="w-[80%] ml-[8%] mt-4"/>
            <p className="text-center mt-4 text-sm">Designed and developed by tonyochieng 2025</p>
        </div>
    )
}

export default Footer