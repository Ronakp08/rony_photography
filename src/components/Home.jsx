import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { motion } from 'framer-motion';
import Photos from './Layouts/Photos.jsx'; // Import Photos layout

function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div>
            <div className="relative pt-32 overflow-hidden xl:pt-40 bg-black">
                <motion.div
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                        <motion.div
                            className="text-left md:max-w-xl md:mx-auto md:text-center"
                            variants={itemVariants}
                        >
                            <h1 className="tracking-tighter text-white">
                                <motion.span
                                    className="font-serif font-normal text-7xl"
                                    variants={itemVariants}
                                >
                                    Rony_Photography_02
                                </motion.span>
                            </h1>
                            <motion.p
                                className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70"
                                variants={itemVariants}
                            >
                                Photography is time travel with a lens, freezing chaos into art. It’s capturing lightning, making moments immortal, rebellious, and electric!
                            </motion.p>

                            <motion.div
                                className="mt-8"
                                variants={buttonVariants}
                            >
                                <Link
                                    to="/contact"
                                    className="
                                        mb-4
                                        inline-flex
                                        items-center
                                        justify-center
                                        px-8                                        py-2
                                        font-sans
                                        text-base
                                        font-semibold
                                        transition-all
                                        duration-200
                                        border-2 border-transparent
                                        rounded-full
                                        sm:leading-8
                                        bg-white
                                        sm:text-lg
                                        text-black
                                        hover:bg-opacity-90
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                    "
                                >
                                    Get in touch
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Photos />
        </div>
    );
}

export default Home;
