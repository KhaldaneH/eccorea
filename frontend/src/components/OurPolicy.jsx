import React from 'react';
import { assets } from '../assets/assets';
import { useTranslation } from 'react-i18next';

const OurPolicy = () => {
  const { t } = useTranslation(); // ✅ Import translation function

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>{t('exchange_policy_title')}</p>
        <p className='text-gray-400'>{t('exchange_policy_desc')}</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>{t('return_policy_title')}</p>
        <p className='text-gray-400'>{t('return_policy_desc')}</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>{t('customer_support_title')}</p>
        <p className='text-gray-400'>{t('customer_support_desc')}</p>
      </div>

    </div>
  );
};

export default OurPolicy;
