import { Link } from "react-router-dom"

const HomeLanding = () => {
    return(
        <div className="relative" id="home">
            <img src="/pexels-pixabay-40568.jpg" className=" h-[94vh] w-full" alt=""/>
            <div className="w-full h-[94vh] bg-black/50 z-1 absolute top-0"></div>
            <div className="absolute top-[30%] z-2 w-full">
                <h2 className="text-white font-extrabold text-6xl ml-[10%]">Welcome to medical view </h2>
                <h3 className="text-white font-bold text-2xl ml-[10%]">Transforming lives through excelence in healthcare</h3>
                <h4 className="text-white  ml-[10%] mt-4">We are committed to providing exceptional patient care and promoting wellness in our community.</h4>
                <div className="ml-[10%] mt-15 flex gap-10">
                    <Link to={"/register"} className="font-bold nav p-4 rounded-sm">Create account</Link>
                    <Link to={"/patientportal"} className="font-bold cardAp p-4 rounded-sm">Book appointment</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding