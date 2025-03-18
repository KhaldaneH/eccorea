import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  // Array of images to cycle through
  const images = [assets.hero, assets.herbo, assets.apit, assets.her3];

  // State to track current image index
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>{t('bestsellers')}</p> 
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-3xl leading-relaxed'>
            {t('latest_arrivals')}
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>{t('shop_now')}</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side - Smooth Image Transition */}
      <div className='w-full sm:w-1/2 h-[500px] overflow-hidden relative'>
        {images.map((img, index) => (
          <img 
            key={index} 
            className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`} 
            src={img} 
            alt="Hero"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
