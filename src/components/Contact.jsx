import React, { useState, useEffect } from 'react';
import { init, sendForm } from '@emailjs/browser';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

function Contact() {
  const contacts = [
    {
      name: 'Ronak',
      instagram: 'https://www.instagram.com/rony_photography_02',
      phoneNumber: '7623886989', // WhatsApp and Call number
    },
  ];

  const [formData, setFormData] = useState({
    from_name: '',
    email_id: '',
    contect_no: '',
    message: '',
  });
  const [btnText, setBtnText] = useState('Send Email');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    init('jtaQl53gnwVP8rLR5');

    const handleResize = () => {
      setIsMobile(window.innerWidth < 560);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');

    const serviceID = 'service_xtzs16g';
    const templateID = 'template_vtcto8n';

    sendForm(serviceID, templateID, e.target)
      .then(() => {
        setBtnText('Send Email');
        alert('Sent!');
      })
      .catch((err) => {
        setBtnText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <section id="contact" className="bg-black py-16 flex items-center justify-center min-h-screen">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 w-screen bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-start justify-start relative">

          {/* Map 1 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14914.516049001804!2d73.29043004999994!3d20.874550050000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0844bd1aabeab%3A0x7a4774a38f0379e5!2sVaheval%2C%20Gujarat%20394248%2C%20India!5e0!3m2!1sen!2sus!4v1728290786360!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vaheval Location"
          ></iframe>
          {/* Address info */}
          {!isMobile && (
            <div className="bg-black text-white relative flex flex-wrap py-6 rounded shadow-md mt-4">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-bold text-gray-dark">ADDRESS</h2>
                <p className="mt-1">Vaheval, Surat 394248</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-bold text-gray-dark">EMAIL</h2>
                <a href="mailto:ronypatel043@gmail.com" className="text-teal-500 leading-relaxed">ronypatel043@gmail.com</a>
                <h2 className="font-bold text-gray-dark mt-4">PHONE</h2>
                <a href="tel:+917623886989" className="leading-relaxed">+91 7623886989</a>
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-black text-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-teal-500 text-lg mb-2 font-medium">Get in Touch</h2>
          <p className="mb-5 text-gray-txt">
            Capture the breathtaking beauty of nature with our stunning photography! Contact us today for professional outdoor shooting services tailored to your vision. Let’s preserve the wonders of the natural world in timeless memories!
          </p>
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="field">
              <label htmlFor="from_name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email_id" className="block text-sm font-medium text-white">Email ID</label>
              <input
                type="email"
                name="email_id"
                id="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2 focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contect_no" className="block text-sm font-medium text-white">Contact No</label>
              <input
                type="text"
                name="contect_no"
                id="contect_no"
                value={formData.contect_no}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2 focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2 focus:ring focus:ring-green-300"
                required
              />
            </div>

            <input
              type="submit"
              id="button"
              value={btnText}
              className="mt-4 w-full bg-green-300 border-white border-2 text-black font-bold py-2 rounded-md hover:bg-green-200"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
