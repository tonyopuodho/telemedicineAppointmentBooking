import { Link } from 'react-scroll'
import HomeLanding from "./home"
import AboutPage from "./about"
import BlogPage from "./blog"
import Doctors from "./doctors"
import Testimonial from "./testimonial"
import Footer from "./footer"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    const handleBtn = () => {
        navigate("/patientportal")
    }
    return (
        <div>
            <div className="w-full shadow-md h-[8vh] sticky top-0 flex justify-between items-center bg-white z-10">
                <div className="flex items-center">
                    <img src="/medical-view.svg" alt="logo" className="h-10 w-10 bg-white ml-10 top-0 "/>
                    <h2 className="font-bold ml-2 text-xl">Medical view</h2>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex space-x-3 font-bold cursor-pointer">
                        <li>
                             <Link to='home' smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                             <Link to='blog' smooth={true} duration={500}>Blog</Link>
                        </li>
                        <li>
                             <Link to='doctor' smooth={true} duration={500}>Doctors</Link>
                        </li>
                        <li>
                             <Link to='testimonial' smooth={true} duration={500}>Testimonials</Link>
                        </li>
                    </ul>
                    <button onClick={() => handleBtn()} className="p-2 mr-[30px] card h-10 w-50 text-center rounded-sm font-bold">Book appointment</button>
                </div>
            </div>
            <HomeLanding/>
            <AboutPage/>
            <BlogPage/>
            <Doctors/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default LandingPage