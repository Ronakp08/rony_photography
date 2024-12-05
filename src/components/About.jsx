import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import birdimg from '../assets/birdimg.jpg';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

function About() {
  const phoneNumber1 = "7623886989"; // Phone number Mine

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move to the original position
  };
  return (
    <div className="bg-black pt-24 w-screen text-white">
      {/* Section 1 */}
      <section className="px-4 py-32 min-h-screen items-center bg-black md:px-8 lg:px-12 mt-0 md:mt-10">
        <div className="container items-center max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center sm:-mx-3">
            {/* Left Text */}
            <div className="w-full md:w-1/2 md:px-3">
              <div className="space-y-6 md:space-y-4 lg:space-y-8 xl:space-y-9">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  <motion.span variants={textVariants} className="block">
                    We Capture Timeless Moments
                  </motion.span>
                  <motion.span
                    variants={textVariants}
                    className="block text-green-300"
                  >
                    Through the Lens
                  </motion.span>
                </motion.h1>
                <p className="text-base text-gray-400 sm:text-lg lg:text-xl">
                    Our passion is to capture a Beauty of Nature
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/contact" // Navigate to /contact
                    className="flex items-center justify-center w-full px-6 py-3 text-lg text-black bg-green-400 rounded-md hover:bg-green-200 sm:w-auto"
                  >
                    Book a Session
                  </Link>
                  <Link
                    to="/Service" // Navigate to /service
                    className="flex items-center justify-center px-6 py-3 mt-3 text-gray-900 bg-white rounded-md hover:bg-gray-200 hover:text-gray-900 sm:mt-0"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1595241/pexels-photo-1595241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="photography session" 
                  loading="lazy" // Lazy loading added here
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <u className='flex w-screen justify-center items-center text-black bg-sky-200 text-4xl font-bold  p-5'> About me</u>
      {/* Section 3 */}
      <section className="bg-sky-200 py-16 md:py-10">
        <div className="container flex flex-wrap max-w-6xl px-4 mx-auto md:flex-nowrap md:px-8 lg:px-16">
          {/* Image */}
          <div className="w-full border-8 border-black mb-12 md:mb-0 md:w-1/2">
            <img 
              src={birdimg} 
              alt="boost creativity" 
              className="w-full max-w-md object-contain mx-auto md:max-w-none" 
              loading="lazy" // Lazy loading added here
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-semibold text-black md:text-3xl">
              Ronak Patel
            </h2>
            <p className="mt-4 text-gray-700 lg:text-lg">
            Our lens captures the breathtaking beauty of nature, bringing its vibrant essence and serene moments to life.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-6 h-6 text-blue-800 mr-2">✓</span> Capturing Beauty of Nature
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-blue-800 mr-2">✓</span> Framing the Wild
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-blue-800 mr-2">✓</span> Chasing Light, Capturing Life
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 text-blue-800 mr-2">✓</span> 
                <div className="flex space-x-5 mt-4 text-3xl md:mt-0">
                  {/* Instagram Link */}
                  <a 
                    href="https://www.instagram.com/rony_photography_02" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pink-800 "
                  >
                    <FaInstagram className="text-4xl" />
                  </a>
                  {/* WhatsApp Link */}
                  <a 
                    href={`https://wa.me/91${phoneNumber1}`} // WhatsApp link to the specified phone number
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-600"
                  >
                    <FaWhatsapp className="text-4xl" />
                  </a>
                  {/* Call Link */}
                  <a 
                    href={`tel:${phoneNumber1}`} 
                    className="hover:text-blue-700 "
                  >
                    <FaPhone className="text-4xl" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
