import { data } from "./data"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {
  let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="p-4 bg-gray-200 h-[70vh]" id="testimonial">
            <h2 className="text-2xl font-bold text-center">Testimonial</h2>
          <div className="w-[90%] mx-auto mt-8">
               <Slider {...settings}>
                    {
                        data.map((item,index) => (
                            <div key={index} className="p-6 rounded-sm shadow-md bg-white h-[50vh]">
                                <div className="flex flex-col">
                                    <h2 className="text-gray-900 font-bold text-md mb-2 text-center">{item.name}</h2>
                                    <p className="text-gray-800 text-md mt-5">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
          </div>
        </div>
    )
}

export default Testimonial