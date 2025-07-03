import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../../assets/Hero/women.jpg";
import Image2 from "../../../assets/Hero/men.jpg";
import Image3 from "../../../assets/Hero/discount.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full mx-auto h-[500px] overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        {/* Slide 1 */}
        <div className="relative">
          <img src={Image1} alt="Upto 50% off All Women's Wear" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
            <h3 className="text-3xl font-bold text-white mb-2">
              Upto 50% off All Women's Wear
            </h3>
            <p className="text-white mb-4">
              Discover unbeatable deals on trendy styles.
            </p>
            <button
              onClick={() => handleNavigate("/women")}
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src={Image2} alt="30% off on all Men's Wear" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
            <h3 className="text-3xl font-bold text-white mb-2">
              30% off on all Men's Wear
            </h3>
            <p className="text-white mb-4">
              Explore premium styles designed for comfort.
            </p>
            <button
              onClick={() => handleNavigate("/women")}
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src={Image3} alt="10% off on all Products" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
            <h3 className="text-3xl font-bold text-white mb-2">
              10% off on all Products
            </h3>
            <p className="text-white mb-4">
              Storewide savings on every item you love.
            </p>
            <button
              onClick={() => handleNavigate("/women")}
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              Order Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
