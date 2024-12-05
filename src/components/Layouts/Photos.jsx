import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photo1 from './homePhotos/photo1.jpg';
import photo2 from './homePhotos/photo2.jpg';
import photo3 from './homePhotos/photo3.jpg';
import photo4 from './homePhotos/photo4.jpg';
import photo5 from './homePhotos/photo5.jpg';
import photo6 from './homePhotos/photo6.jpg';
import photo7 from './homePhotos/photo7.jpg';
import photo8 from './homePhotos/photo8.jpg';
import photo9 from './homePhotos/photo9.jpg';
import photo10 from './homePhotos/photo10.jpg';
import photo11 from './homePhotos/photo11.jpg';

function Photos() {
  return (
    <div>
      {/* Section 1 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 bg-gray-50">
        <div className="flex flex-col md:flex-row mr-12">
          <div className="flex flex-1 flex-col gap-4">
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LazyLoadImage
                className="object-cover h-auto w-80 rounded-md"
                src={photo1}
                alt="img_01"
              />
              <LazyLoadImage
                className="object-cover h-auto w-80 rounded-md ml-4"
                src={photo4}
                alt="img_04"
              />
              
            </motion.div>
            <motion.div
              className="hidden md:flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <LazyLoadImage
                className="object-cover h-auto w-80 rounded-md"
                src={photo9}
                alt="img_02"
              />
              <LazyLoadImage
                className="object-cover h-auto w-80 rounded-md"
                src={photo3}
                alt="img_03"
              />
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <motion.div
              className="hidden md:flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              
              <LazyLoadImage
                className="object-cover h-98 w-full rounded-md"
                src={photo5}
                alt="img_05"
              />
            </motion.div>
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <LazyLoadImage
                className="object-cover h-auto w-80 rounded-md"
                src={photo6}
                alt="img_06"
              />
              <LazyLoadImage
              className="object-cover h-auto w-80 rounded-md ml-4"
              src={photo2}
              alt="img_10"
            />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 bg-white">
        <div className="flex flex-col md:flex-row gap-4">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <LazyLoadImage
              className="object-cover h-96 w-full rounded-md"
              src={photo7}
              alt="img_07"
            />
          </motion.div>
          <motion.div
            className="flex-1 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <LazyLoadImage
              className="object-cover h-96 w-40 rounded-md"
              src={photo8}
              alt="img_08"
            />
            <LazyLoadImage
              className="object-cover h-96 w-full rounded-md"
              src={photo11}
              alt="img_09"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
