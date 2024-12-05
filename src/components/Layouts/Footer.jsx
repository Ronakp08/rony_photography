import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const phoneNumber = "7623886989"; // Phone number to dial

  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand and Description */}
          <div className="col-span-1">
            <h2 className="font-serif text-2xl">
                <Link
                                to="/"
                                title="Rony Photography"
                                className="inline-flex rounded-md focus:outline-none"
                            >
                                <img className="w-auto h-14" src={logo} alt="Rony Photography" />
               </Link> 
            </h2>
            <p className="mt-4 text-gray-400">
              Creatively capturing special moments for my life.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold">Galleries</h3>
            <ul className="mt-4 space-y-2">
              <li>Birds</li>
              <li>Flowers</li>
              <li>Animals</li>
              <li>Nature</li>
            </ul>
          </div>


          {/* About Us Section */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-bold">About</h3>
            <p className="mt-4 text-gray-400">
              Committed to excellence in photography with a unique touch. Let’s create memories.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className='text-center pb-4 text-2xl font-serif'>
            Made with ❤️ by <a className='text-[#5092FF] font-semibold' href="https://ronak-codes.vercel.app/" target='_blank' rel='noreferrer'>RonakCodes</a>
        </div>
          <div className="flex space-x-5 mt-4 md:mt-0">
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/rony_photography_02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram className="text-xl" />
            </a>
            {/* WhatsApp Link */}
            <a 
              href={`https://wa.me/91${phoneNumber}`} // WhatsApp link to the specified phone number
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            {/* Call Link */}
            <a 
              href={`tel:${phoneNumber}`} 
              className="hover:text-gray-400"
            >
              <FaPhone className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
