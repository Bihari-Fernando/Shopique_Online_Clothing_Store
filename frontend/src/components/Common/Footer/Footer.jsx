import React from "react";
import footerLogo from "../../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Womens Wear",
    link: "/womens",
  },
  {
    title: "Mens wear",
    link: "/mens",
  },
  {
    title: "Kids Wear",
    link: "/kids",
  },
  {
    title: "Top Rated",
    link: "/top",
  },
  {
    title: "Trending Items",
    link: "/trending",
  },
];

const Footer = () => {
  return (
    <div className="shadow-md text-white dark:bg-gray-900 dark:text-white">
      <div className=" bg-primary/40">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Shopsy Logo" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-secondary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title + "2"}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social + Contact Info */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#"><FaInstagram className="text-3xl" /></a>
                <a href="#"><FaFacebook className="text-3xl" /></a>
                <a href="#"><FaLinkedin className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Colombo, Sri Lanka</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>0112 234556</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
